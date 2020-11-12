// Loading thing we nedd
const express = require("express");
const UserModel = require("./../model/User");
// Creating router
const router = express.Router();
// Routes
router.post("/login", (req, res) => {
  const user = new UserModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  
});

// Exporting router
module.exports = router;
