// Loading thing we nedd
const express = require("express");
// Creating router
const router = express.Router();
// Routes
router.get("/", (req, res) => {
  res.render("index");
});
router.get("/login", (req, res) => {
    res.render("login");
  });
// Exporting router
module.exports = router;
