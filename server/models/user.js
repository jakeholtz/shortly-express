const utils = require('../lib/hashUtils');
const Model = require('./model');


// Write you user database model methods he
class Users extends Model ({
  constructor() {
    super('users');
  }
});

// User.prototype.add = (username, password) => {
//
// };
//
module.exports = new Users();
