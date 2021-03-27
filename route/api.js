import express from 'express';
import BukuController from "../App/Controller/BukuController.js";
import UserController from "../App/Controller/UserController.js";
const router = express.Router();

router.get("/buku", BukuController.showBuku);
router.get("/buku/:id", BukuController.singleBuku);
router.put("/buku",BukuController.updateBuku);
router.post("/buku",BukuController.tambahBuku);
router.delete("/buku",BukuController.deleteBuku);

router.get("/marker", BukuController.showMarker);
router.get("/marker/:id", BukuController.singleMarker);
router.put("/marker",BukuController.updateMarker);
router.post("/marker",BukuController.tambahMarker);
router.delete("/marker",BukuController.deleteMarker);

router.post("/user",UserController.tambahUser);




export default router;