import util from 'util';

const ApiError = (message, status, context) => {
  this.name = 'ApiError';
  this.message = message || '';
  this.status = status || 500;
  Error.captureStackTrace(this, (context || ApiError));
};

util.inherits(ApiError, Error);

const init = (errOrMsg, status) => {
  errOrMsg = errOrMsg || '';
  let msg = (typeof errOrMsg === 'string') ? errOrMsg : errOrMsg.message;
  return (new ApiError(msg, status, init));
};

export default {
  ApiError,
  init
};
