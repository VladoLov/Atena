import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const cards = [
  { title: "Card 1", content: "Content for Card 1" },
  { title: "Card 2", content: "Content for Card 2" },
  { title: "Card 3", content: "Content for Card 3" },
  { title: "Card 4", content: "Content for Card 4" },
  { title: "Card 5", content: "Content for Card 5" },
  { title: "Card 6", content: "Content for Card 6" },
  { title: "Card 7", content: "Content for Card 7" },
];

export default function CircularCards() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative w-[600px] h-[600px] mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="absolute w-[200px] h-[200px] transform -translate-x-1/2 -translate-y-1/2"
            style={{
              top: `${50 + 40 * Math.sin((index * (2 * Math.PI)) / 7)}%`,
              left: `${50 + 40 * Math.cos((index * (2 * Math.PI)) / 7)}%`,
            }}
          >
            <Card className="w-full h-full overflow-hidden">
              <CardHeader className="p-3">
                <CardTitle className="text-sm">{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-3">
                <p className="text-xs">{card.content}</p>
              </CardContent>
            </Card>
          </div>
        ))}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px]">
          <Card className="w-full h-full flex items-center justify-center">
            <CardContent>
              <h2 className="text-xl font-bold text-center">Center Card</h2>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
