var exec = require('cordova/exec');

module.exports.check_app = function (success, error) {
  exec(success, error, 'ElandMDM', 'check_app', []);
};
