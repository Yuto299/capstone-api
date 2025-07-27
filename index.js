import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL =
  " https://api.openuv.io/api/v1/uv?lat=:lat&lng=:lng&alt=:alt&dt=:dt";

const lat = "";
const lng = "";
const alt = "";
const dt = "";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});
