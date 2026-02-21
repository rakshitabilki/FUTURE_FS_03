const router = require("express").Router();
const Menu = require("../models/Menu");

// Get all menu items
router.get("/", async (req, res) => {
  const items = await Menu.find();
  res.json(items);
});

// Add new item (admin)
router.post("/", async (req, res) => {
  const newItem = new Menu(req.body);
  await newItem.save();
  res.json(newItem);
});

// Delete item
router.delete("/:id", async (req, res) => {
  await Menu.findByIdAndDelete(req.params.id);
  res.json({ message: "Item deleted" });
});

module.exports = router;
