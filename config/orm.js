const connection = require("./connection");


const orm = {
  selectAll: function(cb) {
    const query = ("SELECT * FROM burgers");
    connection.query(query, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: function(name, cb) {
    const query = ("INSERT INTO burgers SET ?");
    connection.query(query, { name: name }, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  updateOne: function(id, devoured, cb) {
    let query = ("UPDATE burgers SET ? WHERE ?");
    connection.query(query, [{ devoured: devoured }, { id: id }], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;