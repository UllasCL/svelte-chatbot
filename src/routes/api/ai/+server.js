import OpenAI from 'openai';
import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';
import { AI_CONFIG, ERROR_MESSAGES } from '$lib/config/constants';

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY
});

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  if (!env.OPENAI_API_KEY) {
    return json({ message: ERROR_MESSAGES.MISSING_API_KEY }, { status: 500 });
  }

  try {
    const { question, context } = await request.json();

    if (!question) {
      return json({ message: ERROR_MESSAGES.MISSING_QUESTION }, { status: 400 });
    }

    const messages = [
      {
        role: "system",
        content: "You are a helpful assistant providing concise, accurate answers to questions."
      }
    ];

    if (context) {
      messages.push({
        role: "system",
        content: `Use this context to answer the question if relevant: ${context}`
      });
    }

    messages.push({
      role: "user",
      content: question
    });

    const completion = await openai.chat.completions.create({
      messages,
      model: AI_CONFIG.MODEL,
      max_tokens: AI_CONFIG.MAX_TOKENS,
      temperature: 0.7
    });

    const answer = completion.choices[0]?.message?.content?.trim();

    if (!answer) {
      throw new Error('No answer received from OpenAI');
    }

    return json({ answer });
  } catch (error) {
    console.error('OpenAI API error:', error);
    return json({ message: ERROR_MESSAGES.AI_SERVICE }, { status: 500 });
  }
}