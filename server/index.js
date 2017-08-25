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
app.use(bodyParser.json({limit: '1mb'}));  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
  extended: true
}));

//用户登陆接口
app.all("/login", (req, resp) => {
  let method = req.method;
  let params = {}
  if(method == "GET"){
    params = req.query;
  }else{
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
          let respD = respData(res, CODE.SUCCESS, true);
          resp.send(respD);
        } else {
          let respD = respData(res, CODE.NO_DATA, true, "No such user");
          resp.send(respD);
        }
      } else {
        log(err);
        let respD = respData(res, CODE.INNER_ERROR, false, err);
        resp.send(respD);
      }
    }
  );
});

app.all("/signin", (req, resp) => {
  let params = parseParms(req.url);
  let usernmae = params.uname,
    pwd = params.pwd,
    sex = params.sex,
    nickname = params.nickname;
});

let server = app.listen(serverOptions.port, (req, res) => {
  console.log(
    `Server is running at http://${serverOptions.host}:${serverOptions.port}`
  );
});
