const orm = require("../config/orm");

const burger = {
  selectAll: function(cb) {
    orm.selectAll(function(result) {
      console.log(result);
      cb(result);
    });
  }
};

module.exports = burger;