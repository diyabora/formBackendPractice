import { User } from "../../Models/authSchema.js";

async function userDetailApi(req, res) {
    try {
        const details = await User.find();
        if(!details){
            return res.status(404).json({
                message:"no users registered yet",
                status:404
            })
        }
        return res.status(200).json({
            message: "detail found successfully",
            status: 200,
            userDetails:details
        })
    }
    catch (error) {
        return res.status(500).json({
            message: "INTERNAL SERVER ERROR",
            status: 500
        })

    }
}

export default userDetailApi;