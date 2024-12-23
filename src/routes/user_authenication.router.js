import { Router } from "express";
import { signup, login } from "../controllers/user_authenication.controller.js";

const router = Router();

//  /auth/signup: POST - Register a new user account(Receptionist, Waiter, Manager, Chef, Cashier).
router.route("/signup").post(signup);

// / auth / login: POST - Log in to an existing account(Email + Password).
router.route("/login").post(login);

export default router;
