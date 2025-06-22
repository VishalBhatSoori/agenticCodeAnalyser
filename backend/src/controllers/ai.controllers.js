import generatePrompt from '../utils/ai.utils.js';

const userPrompt = async (req,res)=>{
    const prompt = req.query.prompt

    if (!prompt){
        return res.status(400).send("Prompt something please");
    }

    const response = await generatePrompt(prompt);

    res.send(response);
}

export default userPrompt;