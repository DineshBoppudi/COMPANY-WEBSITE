import { pool } from "../db.js";

export async function createEmailLog({
  referenceId,
  callId,
  customerName,
  recipientEmail,
  status,
}) {
  await pool.query(
    `
    INSERT INTO email_logs
    (
      reference_id,
      call_id,
      customer_name,
      recipient_email,
      status
    )
    VALUES ($1,$2,$3,$4,$5)
    `,
    [
      referenceId,
      callId,
      customerName,
      recipientEmail,
      status,
    ]
  );
}