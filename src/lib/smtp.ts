// @ts-check
// @ts-ignore
import * as nodemailer from "nodemailer";

import config from "./config";
const mailTransporter = nodemailer.createTransport({
  host: "smtp.one.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: config.NODEMAILER_GMAIL,
    pass: config.NODEMAILER_PASSWORD,
  },
});

const sendMail = ({
  subject,
  content,
  emailTo,
}: {
  subject: string;
  content: string;
  emailTo: string;
}) => {

    const details = {
        from: config.NODEMAILER_GMAIL,
        to: emailTo,
        subject,
        text: subject,
        html: content,
      };

      mailTransporter.sendMail(details, (err: any, info: any) => {
        if (err) {
          console.log(err);
          return false;
        } else {
          console.log("Email sent: " + info.response);
          return true;
        }
      })
  
};

export default sendMail