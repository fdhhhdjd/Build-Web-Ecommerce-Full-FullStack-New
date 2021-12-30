const nodeMailer = require("nodemailer");
require("dotenv").config();
const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    service: "gmail",
    auth: {
      user: "nguyentientai10@gmail.com",
      pass: "Nguyentientai@123",
    },
  });

  const mailOptions = {
    from: "nguyentientai10@gmail.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
