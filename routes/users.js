var express = require("express");
var router = express.Router();

var telegramBot = require("../helpers/telegram-bot");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/", function (req, res, next) {
  const { chatId, message } = req.body;
  telegramBot
    .sendMessage(chatId, message)
    .then((response) => {
      console.log({ response });
      res.send(response);
    })
    .catch((err) => {
      console.log({ err });
      res.send(err);
    });
});

module.exports = router;
