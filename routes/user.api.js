const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const authController = require("../controllers/auth.controller");
//회원가입
router.post("/", userController.createUser);
router.get("/me", authController.authenticate, userController.getUser);
module.exports = router;
