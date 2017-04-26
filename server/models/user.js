const utils = require('../lib/hashUtils');
const crypto = require('crypto');
const Model = require('./model');


class Users extends Model {
  constructor() {
    super('users');
  }

  // compare(attempted, password, salt) {
  //   return utils.compareHash(attempted, password, salt);
  // }

  create(entry) {
    let newPassword = crypto.createHash('sha1');
    newPassword.update(entry.password);
    entry.password = newPassword.digest('hex').slice(0, 5);
    return super.create.call(this, entry);
  }

};

module.exports = new Users();
