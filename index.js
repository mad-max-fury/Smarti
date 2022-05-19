const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();

const app = express();

app.get("/", async (req, res) => {
  res.json("hi");
});

app.listen(8000, () => {
  console.log(`Server is listening on port ${PORT}`);
});
