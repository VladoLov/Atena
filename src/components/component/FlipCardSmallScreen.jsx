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
import Link from "next/link";

export const FlipCardSmallScreen = ({
  image,
  title,
  description,
  subtitle,
  href,
}) => {
  return (
    <Card className="h-full flex flex-col h-68">
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
        <CardTitle className="mt-2 ">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {/* <p className="text-sm text-muted-foreground">{subtitle}</p> */}
        <p className="mt-2">{description}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button className="w-full bg-gradient-to-tr text-black from-crimson-500 to-crimson-600">
          <Link href={href}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
