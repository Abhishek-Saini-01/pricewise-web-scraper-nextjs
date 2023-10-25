import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    if(!process.env.MONGODB_URI){
        return console.log("Mongodb-uri is required!");
    }
    if(isConnected){
        console.log("👍");
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        isConnected = true;
        // console.log("👍");
        
    } catch (error) {
        console.log(error);
        
    }
}