
interface ParsedResponse {
  intro: string;
  reframes: Array<{
    original: string;
    reframe: string;
  }>;
}

export const parseOpenAIResponse = (response: string): ParsedResponse | null => {
  try {
    // Find the intro (everything before "1.")
    const introMatch = response.match(/^(.*?)(?=\s*1\.)/s);
    const intro = introMatch ? introMatch[1].trim() : '';

    // Find all numbered items
    const items = response.match(/\d+\.\s+(.*?)(?=(?:\d+\.|$))/gs);

    if (!items) return null;

    const reframes = items.map(item => {
      // Split at the first comma or similar punctuation
      const [original, ...reframeParts] = item.replace(/^\d+\.\s+/, '').split(/,(.+)/);
      
      return {
        original: original.trim(),
        reframe: reframeParts.join(',').trim()
      };
    });

    return { intro, reframes };
  } catch (error) {
    console.error('Error parsing OpenAI response:', error);
    return null;
  }
};
