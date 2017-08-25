let query = require("./mysql");
let express = require("express");
let app = express();
let url = require("url");
let serverOptions = require("./config/server"); //服务设置
const CODE = require("./utils/respCode"); //状态码
let respData = require("./utils/respData"); //返回值
let log = require("./utils/creatLog"); //日志模块

//用户登陆接口
app.all("/login", (req, resp) => {
  let routePath = url.parse(req.url).pathname;
  let queryParms = url.parse(req.url, true).query;
  query(
    "select * from tb_user where `username`= ? and `pwd`= ?",
    [queryParms.uname, queryParms.pwd],
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

app.all("/signin",(req,resp)=>{
  
})

let server = app.listen(serverOptions.port, (req, res) => {
  console.log(
    `Server is running at http://${serverOptions.host}:${serverOptions.port}`
  );
});
