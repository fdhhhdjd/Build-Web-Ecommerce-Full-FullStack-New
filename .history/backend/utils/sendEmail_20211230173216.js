const nodeMailer = require("nodemailer");
require("dotenv").config();
const sendEmail = async (options) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false, // use SSL
    port: 25,
    auth: {
      user: "nguyentientai10@gmail.com",
      pass: "qbihxtxocrtqmmpi",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
