import dotenv from 'dotenv';
dotenv.config();

import { GoogleGenAI } from "@google/genai";

async function test() {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        text: "Explain how AI works in a few words",
      },
    ],
  });

  console.log(response);
}

test().catch(console.error);
