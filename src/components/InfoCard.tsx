
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

const InfoCard = () => {
  return (
    <Card className="w-full max-w-md bg-gradient-to-br from-white to-softPink/10 border border-softPink/20 rounded-3xl shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Heart className="h-5 w-5 text-pink-500" />
          <h2 className="text-lg font-heading font-medium text-pink-900">Your Inner Child Check-in</h2>
        </div>
        
        <p className="text-sm text-gray-600 mb-2">
          Notice how you talk to yourself today. Would you speak this way to a child?
        </p>
        
        <p className="text-sm text-gray-600">
          Use this space to reflect on your self-talk and find gentler ways to speak to your inner child.
        </p>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
