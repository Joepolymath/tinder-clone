const moment = require('moment');

const logger = (req, res, next) => {
       console.log(`A ${req.method} request has been made`);
       next();
}

module.exports = logger;