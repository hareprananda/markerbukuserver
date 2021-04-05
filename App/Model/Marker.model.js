import mongoose from "mongoose";

const { Schema } = mongoose;
const markerSchema = mongoose.Schema(
  {
    kalimat: { type: String, required: true },
    halaman: { type: Number, required: true },
    idbuku: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "buku",
    },
    __v: { type: Number, select: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("marker", markerSchema, "marker");
