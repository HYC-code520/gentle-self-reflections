
import React from 'react';
import { Button } from '@/components/ui/button';

type PromptSuggestionsProps = {
  onPromptSelect: (text: string) => void;
};

const prompts = [
  "I feel like I'm falling behind.",
  "Nothing I do is ever enough.",
  "I'm tired but I can't rest.",
  "I've made a mistake and I'm angry at myself.",
  "I don't feel good enough."
];

const PromptSuggestions: React.FC<PromptSuggestionsProps> = ({ onPromptSelect }) => {
  return (
    <div className="mb-4">
      <p className="text-sm text-gray-600 mb-2 font-heading">Feeling stuck? Try one of these:</p>
      <div className="flex flex-wrap gap-2">
        {prompts.map((prompt, index) => (
          <Button
            key={index}
            variant="outline"
            className="text-sm py-1 px-3 rounded-full bg-softPink/20 hover:bg-softPink/30 text-pink-700 border-softPink/30"
            onClick={() => onPromptSelect(prompt)}
          >
            {prompt}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default PromptSuggestions;
