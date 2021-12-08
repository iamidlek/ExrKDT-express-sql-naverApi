const express = require("express");

const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.json());

// get 방식은 req.query
// post 방식은 req.body

router.post("/", (req, res, next) => {
  const type = req.query.type;
  if ("log" === type) {
    // 구매 목록 전체 조회
    const dbconnect_Module = require("./dbconnect_module");

    // mybaits
    req.body.mapper = "NaverShoppingMapper"; // 파일명 정의
    req.body.crud = "select"; // select, insert, update, delete 중 하나
    req.body.mapper_id = "selectList"; // 파일의 select 엘리먼트의 id

    router.use("/", dbconnect_Module); // 모듈로 요청 (이동)
    next("route");
  } else if ("purchase" === type) {
    // 구매
    const dbconnect_Module = require("./dbconnect_module");

    // mybaits
    req.body.mapper = "NaverShoppingMapper";
    req.body.crud = "insert";
    req.body.mapper_id = "purchasing";

    router.use("/", dbconnect_Module);
    next("route");
  } else if ("groupby" === type) {
    // 통계
    const dbconnect_Module = require("./dbconnect_module");

    // mybaits
    req.body.mapper = "NaverShoppingMapper";
    req.body.crud = "select";
    req.body.mapper_id = "groupby";

    router.use("/", dbconnect_Module);
    next("route");
  }
});

module.exports = router;
