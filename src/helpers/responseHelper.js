const send = (res, responseData, data = {}) => {
  const { code, message } = responseData;
  res.status(200);
  res.headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Headers":
      "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, access_token",
    "Access-Control-Allow-Methods": "*",
  };
  return res.send({
    responseCode: code,
    responseMessage: message,
    responseData: data,
  });
};

const setErrorResponseMsg = (res, parameter) => {
  return {
    code: res.code,
    message: `${parameter} ${res.message}`,
  };
};

module.exports = { send, setErrorResponseMsg };
