import express from "express";
import { login, logout, registorUser, getMyProfile, getAdmins } from '../controller/user.controller.js';
import { isAuthenticated } from "../middleware/authUser.js";

const router = express.Router();

router.post("/register", registorUser);
router.post("/login",login);
router.get("/logout", isAuthenticated, logout);
router.get("/my-profile", isAuthenticated, getMyProfile);
router.get("/admins", getAdmins);

export default router;