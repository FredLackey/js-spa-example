import jsonwebtoken from 'jsonwebtoken';

const sign = (payload, secret) => jsonwebtoken.sign(payload, secret);

export default {
  sign
};