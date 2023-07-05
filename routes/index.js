const express = require("express");
const auth = require("../middleware/auth");

const { Register, Login, Welcome } = require("../controllers/user");
const router = express.Router();
router.post("/register", Register);
router.post("/login", Login);
router.get("/welcome", auth, Welcome);

module.exports = router;
