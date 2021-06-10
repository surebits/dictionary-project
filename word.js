const mysql = require('mysql2');

const conn = mysql.createConnection({
  host: "https://cs472-dict.herokuapp.com",
  user: "root",
  password: "password",
  database: process.env.CLEARDB_DATABASE_URL,
});

exports.lookup = function (req, res) {    
  conn.query(
    `SELECT * FROM entries WHERE word = '${req.query.term}';`,
    function (error, results, fields) {
      if (error) throw error;
      res.json(results);
    }
  );
};
