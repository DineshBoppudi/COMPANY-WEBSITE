import express from "express";
import { pool } from "../db.js";

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

    const checkcall = () => {
      // if this email have a call in next few hours / day.
    }

    // if (checkcall){
    //   throw(error('t'))
    // }else {}

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

    res.status(201).json({
      success: true,
      data: result.rows[0],
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