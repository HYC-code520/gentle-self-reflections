
interface PerspectiveResponse {
  attributeScores: {
    TOXICITY: {
      summaryScore: { value: number };
    };
    INSULT: {
      summaryScore: { value: number };
    };
  };
}

export const analyzeToneWithPerspective = async (text: string): Promise<{ isToxic: boolean; isInsult: boolean }> => {
  console.log('Analyzing text with Perspective API:', text);
  const THRESHOLD = 0.5;
  
  try {
    const response = await fetch('https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=' + import.meta.env.VITE_PERSPECTIVE_API_KEY || '', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        comment: { text },
        languages: ['en'],
        requestedAttributes: { TOXICITY: {}, INSULT: {} },
      }),
    });

    const data = await response.json() as PerspectiveResponse;
    
    return {
      isToxic: data.attributeScores.TOXICITY.summaryScore.value > THRESHOLD,
      isInsult: data.attributeScores.INSULT.summaryScore.value > THRESHOLD
    };
  } catch (error) {
    console.error('Error analyzing text:', error);
    return { isToxic: false, isInsult: false };
  }
};
