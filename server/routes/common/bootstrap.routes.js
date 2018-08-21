import express from 'express';

const router = express.Router();

router.use((req, res, next) => {
  req.appData = req.appData || {};
  req.sessionInfo = req.sessionInfo || {};
  return next();
});

export default router;