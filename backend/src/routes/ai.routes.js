import {Router} from 'express';
import userPrompt from '../controllers/ai.controllers.js';

const aiRouter=Router();
aiRouter.get("/get-input",userPrompt);

export {aiRouter}