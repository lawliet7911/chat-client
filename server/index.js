let query = require("./mysql");
let express = require("express");
let app = express();
let url = require("url");
let serverOptions = require("./config/server");

//用户登陆接口
app.get('/login', (req, resp) => {
  let routePath = url.parse(req.url).pathname;
  let queryParms = url.parse(req.url, true).query;
  query("select * from tb_user where `username`= '" + queryParms.uname + "' and `pwd`= '" + queryParms.pwd+"'", null, (err, res) => {
    if (!err) {
      if (res.length != 0) {
        resp.send({
          data: res,
          success: true,
          code: 100,
          message: "Get such user"
        })
      } else {
        resp.send({
          data: res,
          success: true,
          code: -1,
          message: "No such user"
        })
      }
    } else {
      resp.send(err);
    }
  })
})

let server = app.listen(serverOptions.port, (req, res) => {
  console.log(
    `Server is running at http://${serverOptions.host}:${serverOptions.port}`
  );
})
