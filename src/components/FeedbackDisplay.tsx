import React from "react";
import { Heart, AlertTriangle, Check, MessageSquare } from "lucide-react";
import { parseOpenAIResponse } from "@/utils/parseResponse";
import ReframeDisplay from "@/components/ReframeDisplay";

type FeedbackDisplayProps = {
  tone: "positive" | "harsh" | "neutral" | null;
  gentleRephrasing: string;
};

const FeedbackDisplay = ({ tone, gentleRephrasing }: FeedbackDisplayProps) => {
  let message: string;
  let icon: JSX.Element;
  let bgColor: string;
  let borderColor: string;

  switch (tone) {
    case "harsh":
      message =
        "Would you say this to your younger self? Let's try to say that more gently.";
      icon = <AlertTriangle className="h-6 w-6 text-yellow-600" />;
      bgColor = "bg-softYellow";
      borderColor = "border-yellow-300";
      break;
    case "positive":
      message =
        "That's a compassionate way to speak to yourself! Your inner child feels safe and loved.";
      icon = <Check className="h-6 w-6 text-green-600" />;
      bgColor = "bg-softBlue";
      borderColor = "border-blue-200";
      break;
    case "neutral":
      message =
        "Your self-talk is balanced. Remember that being gentle with yourself helps you grow.";
      icon = <Heart className="h-6 w-6 text-pink-500" />;
      bgColor = "bg-softPeach";
      borderColor = "border-orange-200";
      break;
    default:
      return null;
  }

  return (
    <div className="mt-6 animate-fade-in">
      {/* Tone feedback section */}
      <div
        className={`${bgColor} p-4 rounded-2xl mb-4 shadow-sm flex items-start gap-3 border ${borderColor}`}
      >
        <div className="mt-0.5 flex-shrink-0">{icon}</div>
        <p className="text-sm">{message}</p>
      </div>

      {/* Gentle rephrasing section */}
      <div className="mt-4">
        {gentleRephrasing && (
          <ReframeDisplay {...parseOpenAIResponse(gentleRephrasing)} />
        )}
      </div>
    </div>
  );
};

export default FeedbackDisplay;
