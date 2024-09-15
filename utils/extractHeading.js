export function extractHeadings(content) {
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const headings = [];
    let match;
  
    while ((match = headingRegex.exec(content)) !== null) {
      const [fullMatch, hashes, headingText] = match;
      const level = hashes.length; // The number of `#` symbols corresponds to the heading level.
      const slug = headingText
        .toLowerCase()
        .replace(/[^\w]+/g, '-') // Convert to a URL-friendly slug.
        .replace(/(^-|-$)/g, ''); // Remove leading/trailing dashes.
      headings.push({ level, text: headingText, slug });
    }

    
    return headings;
  }
  