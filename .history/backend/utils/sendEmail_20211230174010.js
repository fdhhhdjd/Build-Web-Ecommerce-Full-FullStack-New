const nodeMailer = require("nodemailer");
require("dotenv").config();
const sendEmail = async (options) => {
  var transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: "nguyentientai10@gmail.com",
      pass: "qbihxtxocrtqmmpi",
    },
  });

  var mailOptions = {
    from: "nguyentientai10@gmail.com",
    to: "nguyentientai9@gmail.com",
    subject: "Sending Email using Node.js",
    text: "That was easy!",
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
