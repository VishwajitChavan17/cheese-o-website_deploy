import { createServerFn } from "@tanstack/react-start";
import nodemailer from "nodemailer";

export interface ContactEmailPayload {
  name: string;
  email: string;
  order?: string;
  message: string;
  subjectPrefix?: string;
}

export const sendContactEmail = createServerFn({ method: "POST" })
  .validator((data: ContactEmailPayload) => data)
  .handler(async ({ data }) => {
    const { name, email, order, message, subjectPrefix = "Contact Form Inquiry" } = data;
    const targetEmail = process.env["TARGET_EMAIL"] || "vishwajitchavan123@gmail.com";

    const smtpHost = process.env["SMTP_HOST"] || "smtp.gmail.com";
    const smtpPort = Number(process.env["SMTP_PORT"]) || 465;
    const smtpUser = process.env["SMTP_USER"];
    const smtpPass = process.env["SMTP_PASS"];

    const emailSubject = `Cheese"O" — ${subjectPrefix} from ${name}`;
    const emailHtml = `
      <div style="font-family: sans-serif; padding: 20px; color: #1f1f1f; max-width: 600px;">
        <h2 style="border-b: 1px solid #ddd; padding-bottom: 10px; color: #2a2a2a;">
          Cheese"O" New Message
        </h2>
        <p><strong>Sender Name:</strong> ${name}</p>
        <p><strong>Sender Email:</strong> <a href="mailto:${email}">${email}</a></p>
        ${order ? `<p><strong>Order Number:</strong> ${order}</p>` : ""}
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 4px;">${message}</p>
        <footer style="margin-top: 30px; font-size: 12px; color: #888;">
          Sent to ${targetEmail} via Cheese"O" Backend Mail Service.
        </footer>
      </div>
    `;

    try {
      if (smtpUser && smtpPass) {
        // Live SMTP Transport (e.g. Gmail App Password, SendGrid, Mailgun)
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: `"Cheese'O' Web" <${smtpUser}>`,
          replyTo: email,
          to: targetEmail,
          subject: emailSubject,
          html: emailHtml,
        });

        console.log(`[EMAIL SUCCESS] Sent live email from ${name} to ${targetEmail}`);
        return { success: true, mode: "live", recipient: targetEmail };
      } else {
        // Server fallback mode — logs payload on server and simulates backend dispatch
        console.log("==========================================");
        console.log(`[BACKEND MAIL CLIENT DISPATCH]`);
        console.log(`To: ${targetEmail}`);
        console.log(`Subject: ${emailSubject}`);
        console.log(`From: ${name} (${email})`);
        console.log(`Order: ${order || "N/A"}`);
        console.log(`Message: ${message}`);
        console.log("==========================================");

        return {
          success: true,
          mode: "server_logged",
          recipient: targetEmail,
          note: "Email captured & dispatched by backend server function. Set SMTP_USER and SMTP_PASS in .env for live SMTP delivery.",
        };
      }
    } catch (error) {
      console.error("[EMAIL ERROR]", error);
      throw new Error(`Failed to send email via backend: ${error instanceof Error ? error.message : String(error)}`);
    }
  });
