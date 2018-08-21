const forbidden = (req, res, next) => {
  if (req.sessionInfo && req.sessionInfo.details) {
    return next('Action not allowed while logged in.');
  }
  return next();
};

const required = (req, res, next) => {
  if (!req.sessionInfo || !req.sessionInfo.details) {
    return next('Login required.');
  }
  return next();
};

export default {
  forbidden,
  required
};
