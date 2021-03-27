import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    nama : {type : String,required:true},
    password : {type : String,required:true},
    photo : {type: String, default : "nophoto.jpg"}
});
export default mongoose.model("user",UserSchema);