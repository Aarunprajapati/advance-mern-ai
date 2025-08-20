import express from "express";
import { Login, Logout, Signup } from "../controllers/auth.controller.js";

const authRoute = express.Router();

authRoute.post("/signup", Signup);
authRoute.post("/login", Login);
authRoute.post("/logout", Logout);

export default authRoute;
