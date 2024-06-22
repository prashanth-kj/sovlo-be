import express from 'express';
import sovloRoutes from './sovlo.js'
const router = express.Router();

router.use('/sovlo', sovloRoutes)

export default router