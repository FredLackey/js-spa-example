import { Router } from 'express';

const router = Router();

// router.use((req, res, next) => {
//   req.appData = req.appData || {};
//   req.sessionInfo = req.sessionInfo || {};
//   return next();
// });

router.use((err, req, res, next) => {
  if (req.xhr) {
    res.status(err.status || 500).send({ error: err.message });
  } else {
    next (err);
  }
});

router.use((err, req, res, next) => {
  res.status(500);
  res.render('error', { error: err });
});

export default router;