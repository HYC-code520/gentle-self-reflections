
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY || '',
  dangerouslyAllowBrowser: true
});

export const generateGentlerResponse = async (text: string): Promise<string> => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a compassionate therapist helping someone reframe negative self-talk into more balanced, self-compassionate statements. Provide specific, actionable suggestions while maintaining empathy."
        },
        {
          role: "user",
          content: `Please help reframe this negative self-talk in a gentle, specific way: "${text}"`
        }
      ]
    });

    return completion.choices[0].message.content || "Let's try to look at this situation with more self-compassion.";
  } catch (error) {
    console.error('Error generating response:', error);
    return "I understand this is difficult. Let's try to approach this with gentleness.";
  }
};
