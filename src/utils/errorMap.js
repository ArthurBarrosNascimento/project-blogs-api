const errorMap = {
  NOT_FOUND: 404,
  INVALID_VALUE: 422,
  NOT_IN_FORMAT: 400,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = mapError;
