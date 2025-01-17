import mongoose from "mongoose";
let isConnected:boolean = false;

export const connectDB = async ():Promise<void> => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URL) return console.log('MongoDB URL not found');

    if(isConnected){
        console.log('MongoDB existing connection');
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL as string)
        isConnected = true;
        console.log('MongoDB connected');
        
    } catch (err : any) {
        console.log(`Error Connecting to MongoDB: ${err.message}`);   
        
    }
}