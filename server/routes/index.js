import { Router } from 'express';
import api from './api';
import auth from './auth';
import { bootstrap, errors } from './common';

const router = Router();
router.use(bootstrap);

router.use('/api', api);
router.use('/auth', auth);

router.use(errors);

export default router;
