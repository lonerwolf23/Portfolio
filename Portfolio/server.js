const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static("public")); // Serve static files from the "public" folder
app.use(bodyParser.urlencoded({ extended: true }));

// Handle form submission
app.post("/submit-form", (req, res) => {
  const { name, email, message } = req.body;
  console.log(`New Contact Form Submission:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
  res.send("Thank you for your message! I will get back to you soon.");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
