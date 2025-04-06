
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

type CantTalkButtonProps = {
  onSelfCareMessageRequest: () => void;
};

const messages = [
  "That's okay. Just showing up is enough.",
  "Taking care of yourself is important too.",
  "Sometimes being gentle with yourself means resting.",
  "Your inner child understands you need space.",
  "Would your inner child like to hear something kind?"
];

const CantTalkButton: React.FC<CantTalkButtonProps> = ({ onSelfCareMessageRequest }) => {
  const [message, setMessage] = useState<string | null>(null);

  const handleClick = () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMessage);
    onSelfCareMessageRequest();
  };

  return (
    <div className="mb-4">
      <Button
        variant="ghost"
        className="text-sm py-1 px-4 rounded-full text-pink-600 hover:bg-pink-50 border border-softPink/30 flex items-center gap-2"
        onClick={handleClick}
      >
        <Heart className="h-4 w-4 text-softPink" />
        <span>I can't talk right now</span>
      </Button>
      
      {message && (
        <div className="mt-2 p-3 bg-softPeach rounded-xl text-sm animate-fade-in">
          {message}
        </div>
      )}
    </div>
  );
};

export default CantTalkButton;
