
import React from 'react';
import { Heart, AlertTriangle, Check, MessageSquare } from 'lucide-react';

type FeedbackDisplayProps = {
  tone: 'positive' | 'harsh' | 'neutral' | null;
  gentleRephrasing: string;
};

const FeedbackDisplay = ({ tone, gentleRephrasing }: FeedbackDisplayProps) => {
  let message: string;
  let icon: JSX.Element;
  let bgColor: string;

  switch (tone) {
    case 'harsh':
      message = "Would you say this to your younger self? Let's try to say that more gently.";
      icon = <AlertTriangle className="h-6 w-6 text-yellow-600" />;
      bgColor = "bg-softYellow";
      break;
    case 'positive':
      message = "That's a compassionate way to speak to yourself! Your inner child feels safe and loved.";
      icon = <Check className="h-6 w-6 text-green-600" />;
      bgColor = "bg-softBlue";
      break;
    case 'neutral':
      message = "Your self-talk is balanced. Remember that being gentle with yourself helps you grow.";
      icon = <Heart className="h-6 w-6 text-pink-500" />;
      bgColor = "bg-softPeach";
      break;
    default:
      return null;
  }

  return (
    <div className="mt-6 animate-fade-in">
      {/* Tone feedback section */}
      <div className={`${bgColor} p-4 rounded-2xl mb-4 shadow-sm flex items-start gap-3`}>
        <div className="mt-0.5">{icon}</div>
        <p className="text-sm">{message}</p>
      </div>
      
      {/* Gentle rephrasing section */}
      <div className="bg-softGray p-4 rounded-2xl shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <MessageSquare className="h-5 w-5 text-pink-500" />
          <h3 className="font-heading text-sm font-medium">A gentler approach:</h3>
        </div>
        <p className="text-sm pl-7">{gentleRephrasing}</p>
      </div>
    </div>
  );
};

export default FeedbackDisplay;
