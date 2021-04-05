import express from "express";
import BukuController from "../App/Controller/BukuController.js";
import UserController from "../App/Controller/UserController.js";
const router = express.Router();

router.get("/buku", BukuController.showBuku);
router.get("/buku/:id", BukuController.singleBuku);
router.put("/buku/:id", BukuController.updateBuku);
router.post("/buku", BukuController.tambahBuku);
router.delete("/buku/:id", BukuController.deleteBuku);

router.get("/marker", BukuController.showMarker);
router.get("/marker/buku/:id", BukuController.singleMarker);
router.get("/marker/:idbuku", BukuController.bukuMarker);
router.put("/marker/:id", BukuController.updateMarker);
router.post("/marker", BukuController.tambahMarker);
router.delete("/marker/:id", BukuController.deleteMarker);

router.post("/user", UserController.tambahUser);
router.get("/user", UserController.getUser);

router.get("/summary", BukuController.allSummary);

export default router;
