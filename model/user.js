import mongoose from "mongoose"
const DataSchema  = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    pass:{type:String}
})

export default mongoose.models.Users||mongoose.model('Users',DataSchema)