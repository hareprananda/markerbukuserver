import express from "express";
import api from "./api.js";

const app = express();


app.use("/",(req,res,next) => {

    console.log("masuk ke middleware")
    next();
})
app.use(api);

export default app;