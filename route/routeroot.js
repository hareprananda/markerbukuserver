import express from "express";
import api from "./api.js";

const app = express();

app.use("/", (req, res, next) => {
  console.log(req.url, req.method);
  next();
});
app.use(api);

export default app;
