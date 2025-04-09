
import.meta.env.VITE_PERSPECTIVE_API_KEY

export const analyzeToneWithPerspective = async (text: string) => {
  try {
    const API_KEY = import.meta.env.VITE_PERSPECTIVE_API_KEY;
    
    const response = await fetch(`https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        comment: { text },
        languages: ['en'],
        requestedAttributes: {
          TOXICITY: {},
          INSULT: {}
        }
      })
    });

    const data = await response.json();
    
    return {
      isToxic: data.attributeScores?.TOXICITY?.summaryScore?.value > 0.7,
      isInsult: data.attributeScores?.INSULT?.summaryScore?.value > 0.7
    };
  } catch (error) {
    console.error('Error analyzing text:', error);
    return { isToxic: false, isInsult: false };
  }
};
