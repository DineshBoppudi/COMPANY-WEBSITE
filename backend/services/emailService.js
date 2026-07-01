import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendConfirmationEmail = async (
  formData
) => {
  await transporter.sendMail({
    from: `"DataVision Team" <${process.env.EMAIL_USER}>`,

    to: formData.email,

    subject:
      "We've Received Your Consultation Request 🚀",

    html: `
      <div style="
        font-family: Arial, sans-serif;
        max-width: 600px;
        margin: auto;
        padding: 20px;
      ">

        <h2 style="color:#2563eb;">
          Thank You, ${formData.name}!
        </h2>

        <p>
          We have successfully received your
          consultation request.
        </p>

        <p>
          Our team will review your request and
          contact you shortly.
        </p>

        <div style="
          background:#f8fafc;
          padding:15px;
          border-radius:10px;
          margin-top:20px;
        ">

          <h3>Request Details</h3>

          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>

          <p>
            <strong>Phone:</strong>
            ${formData.phone || "Not Provided"}
          </p>

          <p>
            <strong>Date:</strong>
            ${formData.date || "Not Selected"}
          </p>

          <p>
            <strong>Time:</strong>
            ${formData.time || "Not Selected"}
          </p>

        </div>

        <p style="margin-top:20px;">
          🚀 We look forward to discussing your
          project and helping bring your ideas
          to life.
        </p>

        <p>
          Regards,<br/>
          <strong>DataVision Team</strong>
        </p>

      </div>
    `,
  });
};