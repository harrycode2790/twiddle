'use server'

import User from "../models/user.model"
import {connectDB } from '../mongoose'

interface CreateUserParams {
    userId : string;
    email : string;
    username : string;
    name : string;
    image : string;

}

export const CreateUser = async ( {userId, email, username, name, image}: CreateUserParams) : Promise<void> => {

    try {
      connectDB()  
      await User.create({
            id: userId,
            username:username?.toLowerCase(),
            email,
            name,
            image        
      })
    } catch (err : any) {
        throw new Error (`Failed to create user${err.message}`)
    }
}