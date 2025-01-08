// utils/dateFormatter.js

const moment = require('moment');

const formatDate = (date) => {
  return moment(date).format('YYYY-MM-DD HH:mm:ss');
};

module.exports = formatDate;
