import nodemailer from "nodemailer";
import config from "./config";

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: config.BREVO_SMTP_USER, // usually "apikey"
    pass: config.BREVO_SMTP_KEY, // your Brevo SMTP key
  },
});

export const sendMail = async ({
  subject,
  content,
  emailTo,
}: {
  subject: string;
  content: string;
  emailTo: string;
}) => {
  try {
    const info = await transporter.sendMail({
      from: `Bulsujuans <${config.MAIL_FROM}>`,
      to: emailTo,
      subject,
      html: content,
    });

    console.log("Email sent via Brevo:", info.messageId);
    return true;
  } catch (error) {
    console.error("Brevo email error:", error);
    return false;
  }
};
