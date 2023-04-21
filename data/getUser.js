import { UsersModel } from "../Models/User.model.js"

export async function getUserByEmail (email){
    const user = await UsersModel.findOne({email: email})

    return user
}