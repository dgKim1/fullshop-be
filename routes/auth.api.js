const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

//회원가입
router.post("/login", authController.loginWithEmail);
router.post("/google", authController.loginWithGoogle);
module.exports = router;
