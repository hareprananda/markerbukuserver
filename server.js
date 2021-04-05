import express from "express";
import routeroot from "./route/routeroot.js";
import DatabaseConnection from "./App/Database/Connection.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());

app.use(express.static("./public")); //untuk mengakses data static seperti gambar
const corsOption = {
  origin: `${process.env.CLIENT_ENDPOINT}`,
};

app.use(cors(corsOption));

//connection
DatabaseConnection();

//routing
app.use(routeroot);

app.listen(PORT, () => console.log("server has started at 5000"));
