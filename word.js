const mysql = require('mysql');

const conn = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);

exports.lookup = function (req, res) {    
  conn.query(
    `SELECT * FROM entries WHERE word = '${req.query.term}';`,
    function (error, results, fields) {
      if (error) throw error;
      res.json(results);
    }
  );
};
