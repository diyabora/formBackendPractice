import { Router } from "express";
import userDetailApi from "../../Controllers/users/get-all-users-api.js";

const userRouter = Router();
userRouter.get("/get-all-users",userDetailApi);

export default userRouter;