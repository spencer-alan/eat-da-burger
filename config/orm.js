const connection = require("./connection");


const orm = {
  selectAll: function(cb) {
    let query = ("SELECT * FROM burgers");
    connection.query(query, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: function(name, cb) {
    let query = ("INSERT INTO burgers SET ?");
    connection.query(query, { name: name }, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  updateOne: function(id, devoured, cb) {
    let query = ("UPDATE burgers WHERE ? SET ?");

  }
};

module.exports = orm;