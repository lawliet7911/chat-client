let query = require("./mysql");
let express = require("express");
let bodyParser = require("body-parser");
let app = express();
let url = require("url");
let serverOptions = require("./config/server"); //服务设置
const CODE = require("./utils/respCode"); //状态码
let respData = require("./utils/respData"); //返回值
let log = require("./utils/creatLog"); //日志模块
let parseParms = require("./utils/params");
let uuid = require("uuid");
app.use(
  bodyParser.json({
    limit: "1mb"
  })
); //body-parser 解析json格式数据
app.use(
  bodyParser.urlencoded({
    //此项必须在 bodyParser.json 下面,为参数编码
    extended: true
  })
);

//CORS
app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Content-Type", "application/json;charset=utf-8");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

//用户登陆接口
app.all("/login", (req, resp) => {
  let method = req.method;
  let params = {};
  if (method == "GET") {
    params = req.query;
  } else {
    params = req.body;
  }

  let username = params.uname,
    pwd = params.pwd;
  query(
    "select * from tb_user where `username`= ? and `pwd`= ?",
    [username, pwd],
    (err, res) => {
      if (!err) {
        if (res.length != 0) {
          let respD = respData(res, CODE.SUCCESS, true, null, true);
          resp.send(respD);
        } else {
          let respD = respData(res, CODE.NO_DATA, false, "No such user", true);
          resp.send(respD);
        }
      } else {
        log(err);
        let respD = respData(res, CODE.INNER_ERROR, false, err, true);
        resp.send(respD);
      }
    }
  );
});

app.all("/signin", (req, resp) => {
  let method = req.method;
  let params = {};
  if (method == "GET") {
    params = req.query;
  } else {
    params = req.body;
  }
  let usernmae = params.uname,
    pwd = params.pwd,
    sex = params.sex,
    nickname = params.nickName,
    id = "";
  id = uuid.v4().replace(/-/g, "");
  query(
    "INSERT INTO `chatroom`.`tb_user` (`id`, `username`, `pwd`, `nickname`, `sex`) VALUES (?, ?, ?, ?, ?);",
    [id, usernmae, pwd, nickname, sex],
    (err, res) => {
      if (!err) {
        resp.send(respData(res, CODE.SUCCESS, true, "Create success"));
      } else {
        log(err);
        resp.send(respData(err, CODE.INNER_ERROR, false, "Create error"));
      }
    }
  );
});

//查重
app.all("/checkUname", (req, resp) => {
  let method = req.method;
  let params = {};
  if (method == "GET") {
    params = req.query;
  } else {
    params = req.body;
  }
  let uName = params.uname;
  query(
    "select `username` from `tb_user` where `username` = ?",
    [uName],
    (err, res) => {
      if (!err) {
        if (res.length !== 0) {
          resp.send(
            respData(res, CODE.SUCCESS, true, "user already existed.")
          );
        } else {
          resp.send(respData(res, CODE.SUCCESS, true, ""));
        }
      } else {
        resp.send(respData(err, CODE.INNER_ERROR, false, "INNER ERROR"));
        log(err);
      }
    }
  );
});

let server = app.listen(serverOptions.port, (req, res) => {
  console.log(
    `Server is running at http://${serverOptions.host}:${serverOptions.port}`
  );
});
