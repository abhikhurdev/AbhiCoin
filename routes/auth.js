// routes/auth.js
const express = require("express");
const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("../models/user");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, password: hashedPassword });
    res.status(201).send("User registered successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error registering user");
  }
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send("Logged in successfully");
});

router.get("/logout", (req, res) => {
  req.logout();
  res.send("Logged out successfully");
});

module.exports = router;
