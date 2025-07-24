import {generateFromPrompt as aiService} from '../services/ai.services.js';

async function controllerGetPrompt(req,res){
    const prompt = req.query.prompt;
    if(!prompt){
        return res.status(400).send("Prompt is required please");
    }
    const response = await aiService(prompt);
    res.send(response);
}

export {controllerGetPrompt};