import { ParsedResponse } from './types';

interface ParsedResponse {
  intro: string;
  reframes: Array<{
    original: string;
    reframe: string;
  }>;
}

export const parseOpenAIResponse = (text: string): ParsedResponse => {
  const [introPart, ...lines] = text.split(/\d+\./).filter(Boolean);

  const reframes = lines.map((line) => {
    const match = line.match(/(?:Instead of saying|When you think|Rather than saying|If you feel|When you feel|If you're feeling|When you believe)\s+"(.+?)".*?"(.+?)"/i);
    if (match) {
      return {
        original: match[1].trim(),
        reframe: match[2].trim()
      };
    }
    return null;
  }).filter((item): item is NonNullable<typeof item> => item !== null);

  return {
    intro: introPart.trim(),
    reframes: reframes
  };
};