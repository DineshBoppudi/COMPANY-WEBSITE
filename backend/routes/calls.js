import express from "express";
import { pool } from "../db.js";
import { sendConfirmationEmail } from "../services/emailService.js";
import { createEmailLog } from "../services/emailLogService.js";

const router = express.Router();

router.post("/book-call", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      date,
      time,
      message,
    } = req.body;

    const result = await pool.query(
      `
      INSERT INTO calls
      (
        name,
        email,
        phone,
        preferred_date,
        preferred_time,
        message
      )
      VALUES
      ($1,$2,$3,$4,$5,$6)
      RETURNING *
      `,
      [
        name,
        email,
        phone || null,
        date || null,
        time || null,
        message || null,
      ]
    );

    const call = result.rows[0];

    const referenceId =
      `DV-${new Date()
        .toISOString()
        .slice(0, 10)
        .replaceAll("-", "")}-${call.id}`;

    try {
      await sendConfirmationEmail({
        name,
        email,
        phone,
        date,
        time,
        referenceId,
      });

      await createEmailLog({
        referenceId,
        callId: call.id,
        customerName: name,
        recipientEmail: email,
        status: "SENT",
      });

    } catch (emailError) {

      console.error("Email Error:", emailError);

      await createEmailLog({
        referenceId,
        callId: call.id,
        customerName: name,
        recipientEmail: email,
        status: "FAILED",
      });
    }

    res.status(201).json({
      success: true,
      referenceId,
      data: call,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });

  }
});

export default router;