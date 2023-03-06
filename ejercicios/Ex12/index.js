const logger = require('./logger')

function showError() {
  throw new Error("showError function");
}

try {
  showError();
} catch (e) {
  logger.log("error", e.toString());
}