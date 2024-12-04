export const API_ENDPOINTS = {
  AI: '/api/ai'
};

export const AI_CONFIG = {
  MAX_TOKENS: 150,
  MODEL: 'gpt-3.5-turbo'
};

export const ERROR_MESSAGES = {
  AI_SERVICE: 'AI service is currently unavailable. Please try again later.',
  MISSING_API_KEY: 'OpenAI API key not configured',
  MISSING_QUESTION: 'Question is required',
  FETCH_ERROR: 'Failed to fetch AI answer',
  NETWORK_ERROR: 'Network error occurred while fetching the answer'
};