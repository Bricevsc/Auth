import express from "express";
const router = express.Router();

import HomeController from "../controllers/home.js";
import LoginController from "../controllers/login.js";
import DashboardController from "../controllers/dashboard.js";
import LogoutController from "../controllers/logout.js";
import SignController from "../controllers/sign.js"

import isAuthenticated from "../middlewares/auth.js";


router.get("/", HomeController);
router.get("/sign", SignController);
router.post("/login", LoginController);
router.get("/dashboard", isAuthenticated, DashboardController);
router.get("/logout", isAuthenticated, LogoutController);

export default router;