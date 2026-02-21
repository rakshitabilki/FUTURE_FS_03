const router = require("express").Router();
const Contact = require("../models/Contact");

// Save contact form
router.post("/", async (req, res) => {
  const newContact = new Contact(req.body);
  await newContact.save();
  res.json({ message: "Message received" });
});

// Get all enquiries (admin)
router.get("/", async (req, res) => {
  const messages = await Contact.find().sort({ date: -1 });
  res.json(messages);
});

module.exports = router;
