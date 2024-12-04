import * as pdfjs from 'pdfjs-dist';

// Initialize PDF.js worker
const workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
if (typeof window !== 'undefined') {
  pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
}

/**
 * Extracts text from a single PDF page
 * @param {import('pdfjs-dist').PDFPageProxy} page
 * @returns {Promise<string>}
 */
async function extractPageText(page) {
  const textContent = await page.getTextContent();
  return textContent.items.map(item => item.str).join(' ');
}

/**
 * Extracts text content from a PDF file
 * @param {ArrayBuffer} arrayBuffer - The PDF file as an ArrayBuffer
 * @returns {Promise<string>} The extracted text content
 */
export async function extractPdfText(arrayBuffer) {
  try {
    const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
    const pageTexts = await Promise.all(
      Array.from({ length: pdf.numPages }, (_, i) => 
        pdf.getPage(i + 1).then(extractPageText)
      )
    );
    
    return pageTexts.join(' ').trim();
  } catch (error) {
    console.error('Error extracting PDF text:', error);
    throw new Error('Failed to extract text from PDF');
  }
}