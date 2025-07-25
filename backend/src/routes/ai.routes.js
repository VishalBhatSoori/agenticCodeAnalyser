import express from 'express';
import {controllerPostCode } from '../controllers/ai.controller.js';

const router = express.Router();

router.post('/post-code',controllerPostCode);

export default router;

