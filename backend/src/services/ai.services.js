import dotenv from 'dotenv';
dotenv.config();

import { GoogleGenerativeAI } from '@google/generative-ai';

const ai = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

const model = ai.getGenerativeModel({ model: 'gemini-1.5-flash' });


async function reviewCode(promt){
  const result = await model.generateContent(promt);
  return result.response.text();
}

console.log(process.env.GOOGLE_API_KEY);

export default reviewCode;