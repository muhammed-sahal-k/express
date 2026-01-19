import mongoose from "mongoose";

export default async function connection(){

    const db = await mongoose.connect('mongodb://mongodb+srv://sahalkmohammed95_db_user:LIQEG1zCyXwkNGSZ@cluster0.wqrxgcv.mongodb.net/BACKENDEXPRESS')
    console.log("database created");

    return db
    
}