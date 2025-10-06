// @ts-check
// @ts-ignore
import * as nodemailer from "nodemailer";

import config from "./config";
const mailTransporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,
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