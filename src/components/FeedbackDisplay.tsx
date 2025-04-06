
import React from 'react';
import { Heart, AlertTriangle, Check, MessageSquare, Lightbulb } from 'lucide-react';

type FeedbackDisplayProps = {
  tone: 'positive' | 'harsh' | 'neutral' | null;
  gentleRephrasing: string;
};

const FeedbackDisplay = ({ tone, gentleRephrasing }: FeedbackDisplayProps) => {
  let message: string;
  let icon: JSX.Element;
  let bgColor: string;
  let borderColor: string;

  switch (tone) {
    case 'harsh':
      message = "This language contains self-criticism that may be undermining your well-being.";
      icon = <AlertTriangle className="h-5 w-5 text-amber-500" />;
      bgColor = "bg-amber-50";
      borderColor = "border-amber-100";
      break;
    case 'positive':
      message = "Your self-talk demonstrates healthy self-compassion and emotional awareness.";
      icon = <Check className="h-5 w-5 text-emerald-500" />;
      bgColor = "bg-emerald-50";
      borderColor = "border-emerald-100";
      break;
    case 'neutral':
      message = "Your self-talk is balanced. Remember that consistent self-compassion supports emotional resilience.";
      icon = <Heart className="h-5 w-5 text-indigo-500" />;
      bgColor = "bg-indigo-50";
      borderColor = "border-indigo-100";
      break;
    default:
      return null;
  }

  return (
    <div className="mt-6 animate-fade-in space-y-4">
      {/* Tone feedback section */}
      <div className={`${bgColor} p-4 rounded-lg ${borderColor} border flex items-start gap-3`}>
        <div className="mt-0.5 shrink-0">{icon}</div>
        <p className="text-sm text-gray-700">{message}</p>
      </div>
      
      {/* Gentle rephrasing section */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <Lightbulb className="h-4 w-4 text-indigo-500" />
          <h3 className="text-sm font-medium text-gray-700">Suggested reframing:</h3>
        </div>
        <p className="text-sm text-gray-600 pl-6">{gentleRephrasing}</p>
      </div>
    </div>
  );
};

export default FeedbackDisplay;
