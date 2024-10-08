import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const FlipCardSmallScreen = ({
  image,
  title,
  description,
  subtitle,
}) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="relative w-full h-40">
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-t-lg"
          />
        </div>
        <CardTitle className="mt-2">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
        <p className="mt-2">{description}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button className="w-full">Learn More</Button>
      </CardFooter>
    </Card>
  );
};
