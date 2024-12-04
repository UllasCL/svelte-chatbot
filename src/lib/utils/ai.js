import OpenAI from 'openai';
import { env } from '$env/dynamic/private';
import { PUBLIC_ENABLE_AI } from '$env/static/public';

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: false
});

export async function getAIAnswer(question) {
  if (!PUBLIC_ENABLE_AI) {
    return null;
  }

  try {
    const response = await fetch('/api/ai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question })
    });

    if (!response.ok) {
      throw new Error('AI service error');
    }

    const data = await response.json();
    return data.answer;
  } catch (error) {
    console.error('Error getting AI answer:', error);
    return null;
  }
}