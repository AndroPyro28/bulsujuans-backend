import nodemailer from "nodemailer";
import config from "./config";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: config.NODEMAILER_GMAIL,
    pass: config.NODEMAILER_PASSWORD,
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
      from: `"Bulsujuans" <${config.NODEMAILER_GMAIL}>`,
      to: emailTo,
      subject,
      html: content,
    });

    console.log("Email sent:", info.messageId);
    return true;
  } catch (error) {
    console.error("Email error:", error);
    return false;
  }
};
