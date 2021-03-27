import mongoose from "mongoose";

const markerSchema = mongoose.Schema({
    kalimat : {type : String, required : true},
    buku : {type: mongoose.Schema.Types.ObjectId, required:true}
},
{
    collection : "marker"
});

export default mongoose.model("marker",markerSchema);