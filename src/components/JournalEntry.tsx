import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Heart } from "lucide-react";
import FeedbackDisplay from "./FeedbackDisplay";
import MoodPicker from "./MoodPicker";
import PromptSuggestions from "./PromptSuggestions";
import CantTalkButton from "./CantTalkButton";
import { analyzeToneWithPerspective } from "@/services/perspectiveApi";
import { checkIfHarshSemantically } from "@/services/semanticToneCheck";

type ToneType = "positive" | "harsh" | "neutral" | null;

const JournalEntry = () => {
  const [journalText, setJournalText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toneFeedback, setToneFeedback] = useState<ToneType>(null);
  const [gentleRephrasing, setGentleRephrasing] = useState("");
  const [selfCareMode, setSelfCareMode] = useState(false);

  const analyzeTone = async (text: string): Promise<ToneType> => {
    if (!text.trim()) return null;

    try {
      const { isToxic, isInsult } = await analyzeToneWithPerspective(text);
      const semanticHarsh = await checkIfHarshSemantically(text);

      console.log("API Response:", { isToxic, isInsult, semanticHarsh });

      if (isToxic || isInsult || semanticHarsh) return "harsh";
      return "neutral";
    } catch (error) {
      console.error("Error analyzing tone:", error);
      return "neutral";
    }
  };

  const generateGentleRephrasing = (text: string, tone: ToneType): string => {
    if (tone === "positive") {
      return `That's a kind way to speak to yourself. Keep nurturing this positive self-talk!`;
    } else if (tone === "harsh") {
      const replacements: { [key: string]: string } = {
        failure: "someone who's still growing",
        stupid: "still figuring things out",
        "hate myself": "find parts of myself challenging",
        terrible: "having a tough time",
        worst: "struggling lately",
        useless: "learning through effort",
        never: "not yet",
        bad: "still learning",
        "not good enough": "doing your best in a tough moment",
        "don't feel good enough": "worthy, even when it’s hard",
      };

      let gentler = text;
      let changed = false;

      for (const [pattern, replacement] of Object.entries(replacements)) {
        const regex = new RegExp(pattern, "gi");
        if (regex.test(gentler)) {
          gentler = gentler.replace(regex, replacement);
          changed = true;
        }
      }

      if (changed) {
        return `A gentler way to phrase this might be: "${gentler}"`;
      } else {
        return `You're being really hard on yourself. What would you say to a friend who said that?`;
      }
    } else {
      return `You're doing well balancing your thoughts. Remember that it's okay to be kind to yourself.`;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!journalText.trim()) return;

    setIsSubmitting(true);
    try {
      const tone = await analyzeTone(journalText);
      setToneFeedback(tone);
      setGentleRephrasing(generateGentleRephrasing(journalText, tone));
    } catch (error) {
      console.error("Error analyzing text:", error);
      setToneFeedback("neutral");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMoodSelect = (text: string) => {
    setJournalText(text);
  };

  const handlePromptSelect = (text: string) => {
    setJournalText(text);
  };

  const handleSelfCareMode = () => {
    setSelfCareMode(true);
    if (!toneFeedback) {
      setToneFeedback("positive");
      setGentleRephrasing(
        "It's perfectly okay to rest. Your inner child thanks you for recognizing when you need space. You're showing wisdom by pausing when you need to.",
      );
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl p-6 shadow-md border border-softPink/20">
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="journal-entry"
            className="block text-sm font-medium text-gray-700 mb-2 font-heading"
          >
            Share how you're talking to yourself today:
          </label>
          <Textarea
            id="journal-entry"
            placeholder="Type your thoughts here... (e.g., 'I feel like I'm not good enough')"
            className="w-full p-4 rounded-2xl border-softPink focus:border-pink-400 focus:ring-pink-400 min-h-[120px] input-shadow"
            value={journalText}
            onChange={(e) => setJournalText(e.target.value)}
          />

          <div className="mt-4 space-y-4">
            <MoodPicker onMoodSelect={handleMoodSelect} />

            <PromptSuggestions onPromptSelect={handlePromptSelect} />

            <div className="flex flex-col items-start space-y-4">
              <CantTalkButton onSelfCareMessageRequest={handleSelfCareMode} />

              <Button
                type="submit"
                disabled={
                  isSubmitting || (!journalText.trim() && !selfCareMode)
                }
                className="mt-2 rounded-full px-6 py-2 bg-gradient-to-r from-softPink to-pink-400 hover:opacity-90 transition-all duration-300 text-pink-900 font-medium flex items-center gap-2 shadow-sm"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin h-4 w-4 border-2 border-pink-900 border-t-transparent rounded-full"></div>
                    <span>Reflecting...</span>
                  </div>
                ) : (
                  <>
                    <Heart className="h-4 w-4" />
                    <span>Check Your Self-Talk</span>
                  </>
                )}
              </Button>
            </div>
          </div>
        </form>

        {toneFeedback && (
          <FeedbackDisplay
            tone={toneFeedback}
            gentleRephrasing={gentleRephrasing}
          />
        )}
      </div>
    </div>
  );
};

export default JournalEntry;
