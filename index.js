import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = `https://api.openuv.io/api/v1/uv?lat=:${lat}&lng=:${lng}alt=:${alt}&dt=:${dt}`;

const lat = "";
const lng = "";
const alt = "";
const dt = "";

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(API_URL, {
      headers: {
        "x-access-token": "openuv-fcptrmdkx55d0-io",
      },
    });
    res.render("index.ejs", {
      content: JSON.stringify(result.data),
    });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
