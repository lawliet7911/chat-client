let url = require("url");

module.exports = queryPath => {
  return url.parse(queryPath, true).query;
};
