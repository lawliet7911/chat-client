let fs = require("fs");
let path = require("path");
//生产日志模块，记录错误日志保存为log文件
let createLogDir = log => {
  fs.readdir("./", (err, files) => {
    if (!err) {
      //读取上级目录判断是否存在log目录
      if (files.toString().indexOf("log") > -1) {
        creatLogFile(log);
      } else {
        fs.mkdir("./log", err => {
          if (err) {
            console.log(err);
          } else {
            creatLogFile(log);
          }
        });
      }
    }
  });
};

let creatLogFile = log => {
  let date = new Date();
  let datetimeStr = //当前日志文件名 (date).log
    date.getFullYear() +
    ("00" + (date.getMonth() + 1)).slice(-2) +
    date.getDate();
  let logFileName = datetimeStr + ".log";
  let logContent = "\n \n \n";
  logContent += `########################## ERROR ${datetimeStr} ###############################`;
  try {
    logContent += "\n " + JSON.stringify(log);
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
  fs.readdir("./log", (err, files) => {
    if (!err) {
      fs.appendFile("./log/" + logFileName, logContent, err => {
        if (err) {
          console.log(err);
        }
      });
    }
  });
};

module.exports = log => {
  createLogDir(log);
};
