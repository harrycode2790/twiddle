'use server'

import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    id:{type: String, required: true},
    email :{type: String, required: true, unique: true},
    username :{type: String, required: true, unique: true},
    name :{type: String, required: true},
    image: { type: String, },
    bio: { type: String, },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ],
    retweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ],

    likedTweeets : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ],

    repiles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ],

    onboarded : {type : Boolean, default: false},

    groups: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Group'
        }
    ]


})

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User