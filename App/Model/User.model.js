import mongoose from "mongoose";
import BukuModel from "./Buku.model.js";
const UserSchema = mongoose.Schema({
  nama: { type: String, required: true },
  password: { type: String, required: true, select: false },
  photo: { type: String, default: "nophoto.jpg" },
  __v: { type: Number, select: false },
});
export default mongoose.model("user", UserSchema);
