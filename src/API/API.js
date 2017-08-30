import axios from "axios";

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";
// axios.defaults.baseURL = "http://127.0.0.1:8086/";
axios.defaults.baseURL = "http://172.19.0.19:8086/";

export function fetch(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(
        response => {
          resolve(response.data);
        },
        err => {
          reject(err);
        }
      )
      .catch(error => {
        reject(error);
      });
  });
}

export default {
  Login(params) {
    return fetch("/login", params);
  },
  SignIn(params) {
    return fetch("/signin", params);
  },
  checkUname(params) {
    return fetch("/checkUname",params);
  }
};
