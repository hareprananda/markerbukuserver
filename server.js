import express from "express";
import mongoose from "mongoose";
import routeroot from "./route/routeroot.js"
import DatabaseConnection from "./App/Database/Connection.js";





const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());

//connection
DatabaseConnection();


//routing
app.use(routeroot);




app.listen(PORT, () => console.log("server has started at 5000"));
