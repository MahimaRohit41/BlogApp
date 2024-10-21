import express from "express";
import { login, logout, registorUser } from '../controller/user.controller.js';

const router = express.Router();

router.post("/registor",registorUser);
router.post("/login",login);
router.get("/logout",logout);


export default router;