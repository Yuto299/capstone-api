import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const lat = req.query.lat;
  const lng = req.query.lng;

  // latとlngが両方ある場合のみAPIリクエストを実行
  if (lat && lng) {
    const API_URL = `https://api.openuv.io/api/v1/uv?lat=${lat}&lng=${lng}`;

    try {
      const result = await axios.get(API_URL, {
        headers: {
          "x-access-token": "openuv-fcptrmdkx55d0-io",
        },
      });

      // 各値たち
      const uv = result.data.result.uv;
      const uv_time = result.data.result.uv_time;
      const uv_max = result.data.result.uv_max;
      const uv_max_time = result.data.result.uv_max_time;
      const ozone = result.data.result.ozone;
      const ozone_time = result.data.result.ozone_time;

      res.render("index.ejs", {
        content: true,
        uv,
        uv_time,
        uv_max,
        uv_max_time,
        ozone,
        ozone_time,
      });
    } catch (error) {
      console.error("API Error:", error);
      res.status(500).send(`エラーが発生しました: ${error.message}`);
    }
  } else {
    // latかlngが未指定の場合はフォームのみ表示
    res.render("index.ejs", {
      content: false,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
