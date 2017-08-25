module.exports = (data, code, success = false, message = null) => {
  return {
    data: data,
    code: code,
    message: message,
    success: success
  };
};
