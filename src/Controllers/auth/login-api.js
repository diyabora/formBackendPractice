import { User } from "../../Models/authSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function loginApi(req, res) {
  try {
    const userData = req.body;
    console.log("data:", userData);
    if (!userData.name || !userData.email || !userData.password) {
      return res.status(400).json({
        message: "all fields are required",
        status: 400
      })
    }
    let existingUser = await User.findOne({ name: userData.name, email: userData.email });
    if (!existingUser) {
      return res.status(404).json({
        message: "user not found! Invalid user or email",
        status: 404
      })
    }

    let passwordValidate = await bcrypt.compare(userData.password, existingUser.password);
    if (!passwordValidate) {
      return res.status(401).json({
        message: "invalid credentials",
        status: 401
      })
    }

    const token = jwt.sign(
      {
        userId: existingUser._id,
        name: existingUser.name,
        email: existingUser.email
      },
      "mySecretKey",
      {
        expiresIn: "1d"
      }
    );

    return res.status(200).json({
      message: "login successfully",
      status: 200,
      token:token
    })
  }
  catch (error) {
    return res.status(500).json({
      message: "INTERNAL SERVER ERROR",
      status: 500
    })
  }
}
export default loginApi;
