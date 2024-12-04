/**
 * Performs text search with basic relevance scoring
 * @param {string} text - Text to search within
 * @param {string} query - Search query
 * @returns {number} Relevance score (0-1)
 */
export function getSearchRelevance(text, query) {
  if (!query || !text) return 0;
  
  const normalizedText = text.toLowerCase();
  const normalizedQuery = query.toLowerCase();
  
  // Check for exact matches first
  if (normalizedText.includes(normalizedQuery)) {
    return 1;
  }
  
  // Check for partial word matches
  const words = normalizedQuery.split(/\s+/);
  const matchedWords = words.filter(word => 
    normalizedText.includes(word)
  );
  
  return matchedWords.length / words.length;
}