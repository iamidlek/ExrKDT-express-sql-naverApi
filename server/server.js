const express = require("express");

// const indexRouter = require("./routes/index");
// const usersRouter = require("./routes/users");
const naverRouter = require("./routes/naverApi");
const naverShopingRouter = require("./routes/naverShoping");

const app = express();

// app.use("/", indexRouter);
// app.use("/users", usersRouter);
app.use("/naver/api", naverRouter);
app.use("/naver/shop", naverShopingRouter);

module.exports = app;
