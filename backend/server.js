const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  // Simple check — later replace with real auth
  if (email === "admin@detektr.com" && password === "password") {
    return res.status(200).json({ success: true, token: "mock-token-123" });
  }

  return res.status(401).json({ success: false, message: "Invalid credentials" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));