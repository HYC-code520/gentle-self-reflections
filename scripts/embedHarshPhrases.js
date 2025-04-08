// scripts/embedHarshPhrases.js
import { writeFileSync } from "fs";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config(); // Load .env

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const harshPhrases = [
  "I'm such a failure",
  "I'm not good enough",
  "Nothing I do matters",
  "I hate myself",
  "I'm a burden",
  "I'm always messing things up",
  "I'm worthless",
  "Everyone would be better off without me",
  "I ruin everything",
  "No one loves me",
];

async function generateEmbeddings() {
  const embeddedData = [];

  for (const phrase of harshPhrases) {
    const response = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: phrase,
    });

    const embedding = response.data[0].embedding;
    embeddedData.push({ phrase, embedding });
    console.log(`✅ Embedded: ${phrase}`);
  }

  writeFileSync(
    "src/lib/harshEmbeddings.json",
    JSON.stringify(embeddedData, null, 2),
  );
  console.log("✅ Embeddings saved to src/lib/harshEmbeddings.json");
}

generateEmbeddings().catch(console.error);
