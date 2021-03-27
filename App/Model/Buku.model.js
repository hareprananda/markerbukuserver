import mongoose from "mongoose";

const BukuSchema = mongoose.Schema({
    judul : {type : String,required:true},
    penulis : {type : String,required:true},
    penambah : {type : mongoose.Schema.Types.ObjectId, ref : "user", required: true},

});
export default mongoose.model("buku",BukuSchema);