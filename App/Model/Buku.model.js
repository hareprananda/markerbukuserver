import mongoose from "mongoose";
import MarkerModel from "./Marker.model.js";

const BukuSchema = mongoose.Schema(
  {
    judul: { type: String, required: true },
    penulis: { type: String, required: true },
    penambah: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    __v: { type: Number, select: false },
  },
  {
    timestamps: true,
  }
);

BukuSchema.pre("deleteOne", function (next) {
  MarkerModel.deleteMany({ idbuku: this._conditions._id }).exec();
  next();
});
export default mongoose.model("buku", BukuSchema);
