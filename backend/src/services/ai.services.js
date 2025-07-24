import dotenv from'dotenv';
import Together from 'together-ai'

dotenv.config();

const client = new Together({
  apiKey: process.env.Together_API_KEY, // This is the default and can be omitted
});

async function generateFromPrompt(prompt) {
  console.log('Input:', prompt);
  const response  = await client.chat.completions.create({
    messages: [{role: 'user', content: prompt}],
    model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
  });

  return response.choices[0].message.content;
}

export  {generateFromPrompt};