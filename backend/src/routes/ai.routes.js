import express from 'express';
import {controllerGetPrompt } from '../controllers/ai.controller.js';

const router = express.Router();

router.get('/get-prompt',controllerGetPrompt);

export default router;

