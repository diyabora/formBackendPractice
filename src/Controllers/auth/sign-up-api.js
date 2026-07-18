import { User } from "../../Models/authSchema.js";
import bcrypt from "bcrypt";

async function signUpApi(req, res) {
    try {
        const userData = req.body;
        if (userData.name === "" || userData.email === "" || userData.password === "") {
            return res.status(400).json({
                message: "all fields are required",
                status: 400
            })
        }
        const existingUser = await User.findOne({ email: userData.email });
        if (existingUser) {
            return res.status(409).json({
                message: "user already exists",
                status: 409
            })
        }
        const hashPassword = await bcrypt.hash(userData.password, 6);
        const newUser = new User({
            name: userData.name,
            email: userData.email,
            password: hashPassword,
            contact: userData.contact
        })
        await newUser.save();
        return res.status(200).json({
            message: "user created successfully",
            status: 200
        })
    }
    catch (error) {
        return res.status(500).json({
            message: "INTERNAL SERVER ERROR",
            status: 200
        })
    }
}

export default signUpApi;