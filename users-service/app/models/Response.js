const result = (code, message) => {
  return {
    result: {
      code: code,
      message: message
    }
  };
};

const error = (code, message) => {
  return {
    error: {
      code: code,
      message: message
    }
  };
};

const add = (code, message) => {
  return {
    code: code,
    message: message
  };
};

module.exports = {
  add
}
