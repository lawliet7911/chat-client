const mysql = require("mysql");
const dbOption = require("../config/mysql");

const pool = mysql.createPool(dbOption);

/**
 * 查询
 * @param {string} sql 
 * @param {Object} options 
 * @param {Function} callback 
 */
const query = (sql, options, callback) => {
  pool.getConnection((err, conn) => {
    if (!err) {
      conn.query(sql, (err, res, fields) => {
        callback(err, res, fields);
        conn.release();
      });
    } else {
      callback(err, null, null);
    }
  });
};

module.exports = query;
