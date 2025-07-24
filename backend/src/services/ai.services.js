import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function generateFromPrompt(prompt) {
  console.log('Input:', prompt);
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-pro',  // or 'gemini-2.5-pro' if you have access
    contents: prompt,
  });

  return response.text;
}

export { generateFromPrompt };
