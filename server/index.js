const express = require("express");
const cors = require("cors");
const router = express.Router();
const axios = require("axios");
const https = require("https");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json({ extended: true }));

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(
  "/",
  cors(corsOptions),
  router.post("/", async (req, res) => {
    const currentPage = String(req.body.currentPage);
    const response = await axios.get(
      `https://api.instantwebtools.net/v1/passenger?page=${currentPage}&size=13`,
      { httpsAgent: new https.Agent({ rejectUnauthorized: false }) }
    );
    res.json(response.data);
  })
);

const start = () => {
  app.listen(3100, () => console.log("Server started..."));
};

start();
