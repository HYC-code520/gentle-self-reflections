import React, { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Reframe {
  original: string;
  reframe: string;
}

interface ReframeDisplayProps {
  intro: string;
  reframes: Reframe[];
}

const ReframeDisplay = ({ intro, reframes }: ReframeDisplayProps) => {
  const [favorites, setFavorites] = useState<Reframe[]>([]);

  const handleFavorite = (reframe: Reframe) => {
    setFavorites((prev) => {
      const exists = prev.some((f) => f.original === reframe.original);
      const newFavorites = exists
        ? prev.filter((f) => f.original !== reframe.original)
        : [...prev, reframe];

      localStorage.setItem("favoriteReframes", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  return (
    <div className="space-y-4">
      <div className="bg-softPeach p-4 rounded-xl text-gray-700">{intro}</div>

      <Accordion type="single" collapsible className="space-y-2">
        {reframes.map((reframe, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <div className="flex items-center justify-between">
              <AccordionTrigger className="text-left">
                {reframe.original}
              </AccordionTrigger>
              <Button
                variant="ghost"
                size="sm"
                className={`${favorites.some((f) => f.original === reframe.original) ? "text-pink-500" : "text-gray-400"}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleFavorite(reframe);
                }}
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>
            <AccordionContent className="text-gray-600">
              {reframe.reframe}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {favorites.length > 0 && (
        <div className="mt-8">
          <h3 className="font-heading text-lg mb-4">Favorited Reframes</h3>
          <div className="space-y-3">
            {favorites.map((fav, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl border border-softPink/20"
              >
                <p className="font-medium text-gray-700">{fav.original}</p>
                <p className="text-gray-600 mt-2">{fav.reframe}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ReframeDisplay;
