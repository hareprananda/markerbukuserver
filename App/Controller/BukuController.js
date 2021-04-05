import BukuModel from "../Model/Buku.model.js";
import UserModel from "../Model/User.model.js";
import Helper from "../Database/Helper.js";
import MarkerModel from "../Model/Marker.model.js";
import { TimeStamp } from "../../Helper/Datetime.js";

const BukuController = {
  async showBuku(req, res) {
    const data = await BukuModel.find().populate("penambah").exec();
    res.json(data);
  },
  async singleBuku(req, res) {
    const { id } = req.params;

    const data = await BukuModel.findOne({ _id: id }).exec();

    if (!data) return res.send("Oops something gone wrong");

    return res.json(data);
  },
  async tambahBuku(req, res) {
    const admin = await UserModel.findOne({ nama: "admin" }).exec();

    if (!admin) return res.status(404).send("Belum ada admin");

    let body = req.body;

    if (Array.isArray(body)) {
      body = body.map((oneData) => {
        return { ...oneData, penambah: admin["_id"] };
      });
    } else {
      body.penambah = admin["_id"];
    }

    BukuModel.create(body, (err, data) => {
      if (err) return res.status(422).send(err);

      BukuModel.findOne({ _id: data._id })
        .populate("penambah")
        .exec(function (er, dt) {
          return res.status(201).json(dt);
        });
    });
  },
  async updateBuku(req, res) {
    const { id } = req.params;
    const body = req.body;
    const update = await BukuModel.findOneAndUpdate({ _id: id }, body, {
      new: true,
      useFindAndModify: false,
    }).exec();
    if (!update) return res.status(404).send("Not found");

    return res.json(update);
  },
  async deleteBuku(req, res) {
    const { id } = req.params;

    const hapus = BukuModel.deleteOne({ _id: id }).exec();

    if (!hapus) return res.status(500).json("Hapus Buku Gagal");

    res.status(200).json("Berhasil terhapus");
  },
  async showMarker(req, res) {
    let data = await MarkerModel.find().exec();
    res.json(data);
  },
  async singleMarker(req, res) {
    const { id } = req.params;

    const data = await MarkerModel.findOne({ _id: id }).exec();
    if (!data) return res.status(404).send("Data tidak ditemukan");

    return res.json(data);

    res.json(req.params);
  },

  async bukuMarker(req, res) {
    const { idbuku } = req.params;

    //const data = await MarkerModel.find({ idbuku: idbuku }).exec();
    const page = req.query.page ?? 1;

    const data = await Helper.pagination({
      model: MarkerModel,
      find: { idbuku: idbuku },
      page: page,
    });

    if (!data) return res.status(500).send("Oops something gone wrong");

    return res.json(data);
  },

  async tambahMarker(req, res) {
    const idBuku = req.body.id;
    console.log(req.body);
    const body = req.body;

    MarkerModel.create(body, (err, data) => {
      if (err) return res.status(422).send(err);

      return res.status(201).json(data);
    });
  },
  async updateMarker(req, res) {
    const { id } = req.params;
    const body = req.body;
    const data = await MarkerModel.findOneAndUpdate({ _id: id }, body, {
      new: true,
    }).exec();

    if (!data) return res.status(500).send("Oops something gone wrong");

    return res.json(data);
  },
  async deleteMarker(req, res) {
    const { id } = req.params;

    const deleted = MarkerModel.deleteOne({ _id: id }).exec();

    if (!deleted) return res.status(500).json("Oops something gone wrong");

    return res.status(200).json("Berhasil terhapus");
  },
  async allSummary(req, res) {
    let data = await MarkerModel.find()
      .select("kalimat halaman updatedAt")
      .populate({
        path: "idbuku",
        select: "judul penulis penambah",
        populate: {
          path: "penambah",
          select: "nama photo",
        },
      })
      .exec();

    data = data.map((dat) => {
      let { idbuku, ...other } = dat.toObject();
      let {
        penambah: { photo, nama },
        ...lainnya
      } = idbuku;

      idbuku = { ...lainnya, photo, nama };
      other.updatedAt = TimeStamp(other.updatedAt);
      delete Object.assign(idbuku, { idBuku: idbuku["_id"] })["_id"];

      return { ...other, ...idbuku };
    });
    res.json(data);
  },
};
export default BukuController;
