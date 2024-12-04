/**
 * Validates file type
 * @param {File} file - File to validate
 * @param {string[]} allowedTypes - Array of allowed MIME types
 * @returns {{ valid: boolean; error?: string }}
 */
export function validateFileType(file, allowedTypes) {
  if (!file) {
    return { valid: false, error: 'No file provided' };
  }
  
  if (!allowedTypes.includes(file.type)) {
    return { 
      valid: false, 
      error: `Invalid file type. Allowed types: ${allowedTypes.join(', ')}` 
    };
  }
  
  return { valid: true };
}

/**
 * Validates file size
 * @param {File} file - File to validate
 * @param {number} maxSizeInMB - Maximum allowed size in MB
 * @returns {{ valid: boolean; error?: string }}
 */
export function validateFileSize(file, maxSizeInMB) {
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
  
  if (file.size > maxSizeInBytes) {
    return {
      valid: false,
      error: `File size exceeds ${maxSizeInMB}MB limit`
    };
  }
  
  return { valid: true };
}