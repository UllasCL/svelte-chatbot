/**
 * Filters FAQs based on a search query
 * @param {Array<{ question: string; answer: string }>} faqs - List of FAQs
 * @param {string} query - Search query
 * @returns {Array<{ question: string; answer: string }>}
 */
export function filterFaqs(faqs, query) {
  if (!query?.trim()) return faqs;
  
  const searchTerm = query.toLowerCase().trim();
  return faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm) ||
    faq.answer.toLowerCase().includes(searchTerm)
  );
}