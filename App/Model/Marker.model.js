import mongoose from "mongoose";

const markerSchema = mongoose.Schema(
  {
    kalimat: { type: String, required: true },
    halaman: { type: Number, required: true },
    idbuku: { type: mongoose.Schema.Types.ObjectId, required: true },
    __v: { type: Number, select: false },
  },
  {
    collection: "marker",
    timestamps: true,
  }
);

export default mongoose.model("marker", markerSchema);
