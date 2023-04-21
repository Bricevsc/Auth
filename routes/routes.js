import express from "express";
const router = express.Router();

import HomeController from "../controllers/home.js";
import LoginController from "../controllers/login.js";
import RenderDashboard from "../controllers/dashboard.js";
import LogoutController from "../controllers/logout.js";
import SignController from "../controllers/sign.js"
import RenderLogin from "../controllers/renderlogin.js";

import isAuthenticated from "../middlewares/auth.js";

router.get("/", HomeController);
router.post("/sign", SignController);
router.get("/login", RenderLogin)
router.post("/login", LoginController);
router.get("/dashboard", isAuthenticated, RenderDashboard);
router.get("/logout", isAuthenticated, LogoutController);

export default router;