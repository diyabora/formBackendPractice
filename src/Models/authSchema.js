import mongoose from "mongoose"

const authSchema = new mongoose.Schema({
    name: "String",
    email: "String",
    password: "String",
    contact: "String"
})

export const User = mongoose.model("user", authSchema);