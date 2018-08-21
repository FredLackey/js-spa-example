import { Router } from 'express';
import config from '../../config';
import session from '../common/session.routes';
import { strings, email, jwt } from '../utils';
import { Users } from '../data';

const router = Router();

// Validate
router.use(session.forbidden);
router.use((req, res, next) => {
  let body = req.body || {};
  if (!strings.isValid(body.username) && !strings.isValid(body.email)) {
    return next('Username or email address is required.');
  }
  if (strings.isValid(body.email) && !email.isValid(body.email)) {
    return next('Email address is not a valid.');
  }
  if (!strings.isValid(body.pass || body.password)) {
    return next('Password is required.');
  }
  return next();
});

// Find Users by Email
router.use((req, res, next) => {
  if (!email.isValid(req.body.email)) { return next(); }
  Users.findOneByEmail(req.body.email)
    .then((user) => {
      req.appData.user = user;
      return next();
    })
    .catch((err) => {
      return next(err);
    });
});

// Find User by 
router.use((req, res, next) => {
  if (!strings.isValid(req.body.username)) { return next(); }
  Users.findOneByUsername(req.body.username)
    .then((user) => {
      req.appData.user = user;
      return next();
    })
    .catch((err) => {
      return next(err);
    });
});

// Simulate Login
router.use((req, res) => {
  let token = jwt.sign(req.appData.user, config.jwtSecret);
  res.send({
    token
  });
});

export default router;

// -----



