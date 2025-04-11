const { ENABLE_DEBUG_LOG } = require("../consts");

const logHandler = {
  info: (args) => {
    console.log(...args);
  },
  debug: () => {
    if (ENABLE_DEBUG_LOG) {
      console.log(...args);
    }
  },
  warning: () => {},
  error: () => {},
};

module.exports = logHandler;
