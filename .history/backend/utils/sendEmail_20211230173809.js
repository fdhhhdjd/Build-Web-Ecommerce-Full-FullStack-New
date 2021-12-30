const nodeMailer = require("nodemailer");
require("dotenv").config();
const sendEmail = async (options) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "youremail@gmail.com",
      pass: "yourpassword",
    },
  });

  var mailOptions = {
    from: "youremail@gmail.com",
    to: "myfriend@yahoo.com",
    subject: "Sending Email using Node.js",
    text: "That was easy!",
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
