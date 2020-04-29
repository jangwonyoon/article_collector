const express = require("express");
const fileHelper = require("../helpers/file");

const router = express.Router();

// GET /source
router.get("/", async (req, res) => {
  // TODO: Help function을 이용하여, source.txt의 내용을 반환 수 있도록 구현하세요.
  const html = await fileHelper.readFile("./data/source.txt");
  res.status(200).send(html);
});

// POST /source
router.post("/", async (req, res) => {
  // TODO: Help function을 이용하여, source.txt의 내용으로 저장할 수 있도록 구현하세요.
  const body = await fileHelper.writeFile("./data/source.txt", req.body);
  res.status(200).send("ok");
});

module.exports = router;
