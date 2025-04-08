import OpenAI from "openai";
import embeddedExamples from "@/lib/harshEmbeddings.json";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY, // You MUST add this key to your .env file
});

type HarshExample = {
  phrase: string;
  embedding: number[];
};

function cosineSimilarity(vecA: number[], vecB: number[]): number {
  const dot = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
  const magA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
  const magB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
  return dot / (magA * magB);
}

export const checkIfHarshSemantically = async (
  input: string,
): Promise<boolean> => {
  const examples: HarshExample[] = embeddedExamples;

  const inputEmbedding = (
    await openai.embeddings.create({
      model: "text-embedding-3-small",
      input,
    })
  ).data[0].embedding;

  for (const example of examples) {
    const similarity = cosineSimilarity(inputEmbedding, example.embedding);
    if (similarity > 0.85) {
      console.log(
        `⚠️ High similarity with: "${example.phrase}" → ${similarity.toFixed(
          3,
        )}`,
      );
      return true;
    }
  }

  return false;
};
