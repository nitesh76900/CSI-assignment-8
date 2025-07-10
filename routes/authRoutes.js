const express = require("express");
const router = express.Router();
const { register, login, logout, getProfile } = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");
const upload = require("../middlewares/multer");

router.post("/register", upload.single("image"),  register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/profile", authMiddleware, getProfile);

module.exports = router;
