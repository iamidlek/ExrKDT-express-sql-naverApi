const express = require("express");

// const indexRouter = require("./routes/index");
// const usersRouter = require("./routes/users");
const naverRouter = require("./routes/naverApi");
const naverShopingRouter = require("./routes/naverShoping");

// 각 파일로 분리가 가능하려면
// var router = express.Router()로 미니app 을 만든다
// main app 인 server 와 미들웨어를 구분해서 파일을 나눔

// 분리 없이 사용 할 때
// app.get('/',function~)
// 요청별 나누는 법 route 를 사용
// app.route('/book')
//   .get(function (req, res) {
//     res.send('Get a random book')
//   })
//   .post(function (req, res) {
//     res.send('Post a random book')
//   })

const app = express();

// 미들 웨어 설정을 위한 app.use

// app.use("/", indexRouter);
// app.use("/users", usersRouter);
app.use("/naver/api", naverRouter);
app.use("/naver/shop", naverShopingRouter);

module.exports = app;
