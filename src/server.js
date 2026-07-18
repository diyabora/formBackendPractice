import express from "express";
import connectDB from "./config/dbConfig.js";
import cors from "cors";
import authRouter from "./Routes/auth/authRoute.js";
import userRouter from "./Routes/users/userDetail.js";

let port = 9000
let app = express();

app.use(cors());
app.use(express.json());
connectDB();

// app.get("/diya", (req, res) => {
//     res.send("Hello Diya")
// })

app.use("/auth", authRouter);
app.use("/user", userRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost: ${port}`);
})