const express = require("express");
const app = express();
const PORT = 3000;
const nodemailer = require("nodemailer");
const cors = require("cors");

app.use(cors()); // <-- allow cross-origin requests
// Middleware to parse incoming JSON
app.use(express.json());


app.post("/contact", async (req, res) => {
  const { name, email, stAd, stAd2, city, state, postal, phone, birthday } =
    req.body;

  // 📨 1. Create transport (using Gmail SMTP here)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "itzdanishpb65@gmail.com",
      pass: "zapy gezk sifg hvxe",
    },
  });

  // 📝 2. Create email content
  const mailOptions = {
    from: email, // the user's email
    to: "itzdanishpb65@gmail.com", // where you want to receive the emails
    subject: `New Contact Form Submission from ${name}`,
    text: `
Name: ${name}
Email: ${email}
Street Address: ${stAd}
Street Address 2: ${stAd2}
City: ${city}
State: ${state}
Postal/Zip Code: ${postal}
Phone: ${phone}
Birthday: ${birthday}
    `,
  };

  // 🚀 3. Send the email
  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully!");
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server listening on http://localhost:${PORT}`);
});
