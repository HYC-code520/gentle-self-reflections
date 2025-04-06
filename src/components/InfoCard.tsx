import React from "react";
import { Heart } from "lucide-react";

const InfoCard = () => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
      <div className="flex items-center gap-2 mb-3">
        <Heart className="h-5 w-5 text-pink-500" />
        <h2 className="text-lg font-heading font-medium text-pink-900">
          Your Inner Child Check-in
        </h2>
      </div>

      <p className="text-sm text-gray-600 mb-2">
        Notice how you talk to yourself today. Would you speak this way to a
        child?
      </p>

      <p className="text-sm text-gray-600">
        Use this space to reflect on your self-talk and find gentler ways to
        speak to your inner child.
      </p>
    </div>
  );
};

export default InfoCard;
