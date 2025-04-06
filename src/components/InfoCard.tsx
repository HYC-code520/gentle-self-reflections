
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';

const InfoCard = () => {
  return (
    <Card className="max-w-md w-full mx-auto shadow-md border border-neutral-100 rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 px-6 py-4 border-b border-neutral-100">
        <h2 className="text-lg font-heading font-medium flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-indigo-400" />
          <span>Why Self-Talk Matters</span>
        </h2>
      </div>
      <CardContent className="p-6">
        <p className="text-sm text-muted-foreground mb-4">
          The way we speak to ourselves shapes our emotional well-being. Research shows that compassionate self-talk reduces stress and improves resilience.
        </p>
        <div className="grid grid-cols-1 gap-3 mt-3">
          <div className="flex items-start gap-2">
            <span className="text-indigo-400 text-lg leading-tight">•</span>
            <span className="text-sm">Identify harsh self-criticism patterns</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-400 text-lg leading-tight">•</span>
            <span className="text-sm">Develop gentler, more supportive internal dialogue</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-400 text-lg leading-tight">•</span>
            <span className="text-sm">Build self-compassion through consistent practice</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
