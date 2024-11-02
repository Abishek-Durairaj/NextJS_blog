import mongoose from "mongoose";

const connectMongo = async () => {
    try{
        mongoose.connect(process.env.MONGO_URI);
        console.log("database connected successfully")
    }
        catch(err){
         console.log(err)
        }}

export default connectMongo;