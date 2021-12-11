const express = require("express");

const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.json());

const naverApiInfo = require("../config/naver-connetction.json");

router.post("/", (req, res) => {
  const type = req.query.type;
  if ("shoplist" === type) {
    const url = `https://openapi.naver.com/v1/search/shop.json?query=${encodeURI(
      req.body.query
    )}&start=${req.body.start}`;
    const request = require("request");
    request.get(
      {
        url,
        headers: {
          "X-Naver-Client-Id": naverApiInfo.ID,
          "X-Naver-Client-Secret": naverApiInfo.PW,
          "Content-Type": "application/json",
        },
      },
      function (error, response, body) {
        // console.log(response.statusCode); // 모든 정보중 추출
        // console.log(response);
        if (error) {
          return console.error("requset failed:", err);
        }
        res.send(body);
      }
    );
  } else if ("keyword" === type) {
    const url = `https://mac.search.naver.com/mobile/ac?_q_enc=UTF-8&st=1&r_format=json&q=${encodeURI(
      req.body.query
    )}`;
    const request = require("request");
    const response = request.get(
      {
        url,
      },
      function (error, response, body) {
        // console.log(response.statusCode);
        // console.log("r", response); // 통신 정보 전부
        // console.log("b", body); // 받을 정보만
        // if (error) {
        //   res.status(500).send('Something broke!');
        //   return console.error("requset failed:", err);
        // }
        res.send(body);
      }
    );
  }
});

module.exports = router;
