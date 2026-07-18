import { Router } from "express";
import loginApi from "../../Controllers/auth/login-api.js";
import signUpApi from "../../Controllers/auth/sign-up-api.js";

const authRouter = Router();
authRouter.post("/login", loginApi);
authRouter.post("/sign-up",signUpApi);

export default authRouter;