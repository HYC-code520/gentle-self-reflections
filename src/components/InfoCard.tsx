
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const InfoCard = () => {
  return (
    <Card className="max-w-md w-full mx-auto gradient-card border-none shadow-sm mt-6 mb-4">
      <CardContent className="p-6">
        <h2 className="text-lg font-heading font-semibold mb-2 text-center">Why Check Your Self-Talk?</h2>
        <p className="text-sm text-muted-foreground">
          How we speak to ourselves shapes our inner world. This tool helps you notice when your self-talk becomes harsh—the kind you wouldn't use with a child or loved one.
        </p>
        <ul className="mt-4 text-sm space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-pink-500 text-lg">•</span>
            <span>Notice harsh inner critic patterns</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-pink-500 text-lg">•</span>
            <span>Practice gentler, more compassionate self-talk</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-pink-500 text-lg">•</span>
            <span>Nurture your inner child with the kindness they deserve</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
