const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const OpenAI = require("openai");
const harshExamples = require("../src/lib/harshEmbeddings.json");

dotenv.config();

const app = express();
const openai = new OpenAI({ apiKey: process.env.VITE_OPENAI_API_KEY });
app.use(cors());
app.use(express.json());

function cosineSimilarity(vecA: number[], vecB: number[]): number {
  const dot = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
  const magA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
  const magB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
  return dot / (magA * magB);
}

app.post("/check-harsh", async (req, res) => {
  const { input } = req.body;

  try {
    const response = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input,
    });

    const inputEmbedding = response.data[0].embedding;
    for (const example of harshExamples) {
      const similarity = cosineSimilarity(inputEmbedding, example.embedding);
      if (similarity > 0.85) {
        return res.json({ harsh: true, similarity });
      }
    }

    res.json({ harsh: false });
  } catch (error) {
    console.error("Error checking harsh tone:", error);
    res.status(500).json({ error: "Failed to check tone" });
  }
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on http://0.0.0.0:5000");
});
