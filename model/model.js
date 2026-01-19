import mongoose from "mongoose"


const userSchema  = new mongoose.Schema({
    name:{type:String},
    price:{type:Number},
    image:{type:String},
    user_id:{type:String}
})

export default mongoose.models.Datas||mongoose.model('datas',userSchema)