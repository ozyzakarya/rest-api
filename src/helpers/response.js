const response = (status, msg, data, page, limit, totalData) => ({
  status,
  message: msg,
  data,
  page,
  limit,
  totalData,
});

module.exports = response;
