/**
 * Fetches an AI-generated answer for a given question
 * @param {string} question - The question to send to the AI
 * @param {string} [context] - Optional context from PDF content
 * @returns {Promise<string|null>} The AI-generated answer or null if there's an error
 */
export async function fetchAIAnswer(question, context = '') {
  if (!question) {
    console.error('Question is required');
    return null;
  }

  try {
    const response = await fetch('/api/ai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question, context })
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