import React from "react";
import { Button } from "@/components/ui/button";

type Mood = {
  emoji: string;
  label: string;
  text: string;
};

type MoodPickerProps = {
  onMoodSelect: (text: string) => void;
};

const moods: Mood[] = [
  { emoji: "😊", label: "Content", text: "I'm okay, just checking in." },
  { emoji: "😔", label: "Sad", text: "I feel sad and heavy." },
  { emoji: "😤", label: "Frustrated", text: "I'm frustrated with myself." },
  { emoji: "😶", label: "Numb", text: "I feel numb." },
  { emoji: "😟", label: "Anxious", text: "I feel anxious and overwhelmed." },
];

const MoodPicker: React.FC<MoodPickerProps> = ({ onMoodSelect }) => {
  return (
    <div className="mb-4">
      <p className="text-sm text-gray-600 mb-2 font-heading">
        How are you feeling today?
      </p>
      <div className="flex flex-wrap gap-2">
        {moods.map((mood) => (
          <Button
            key={mood.emoji}
            type="button" // ✅ Prevents accidental form submission
            variant="outline"
            className="flex items-center gap-2 bg-white/70 hover:bg-white border-softPink"
            onClick={() => onMoodSelect(mood.text)}
          >
            <span className="text-xl">{mood.emoji}</span>
            <span className="text-xs font-medium text-gray-700">
              {mood.label}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default MoodPicker;
