import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award } from "lucide-react";
import { flipCardData } from "@/lib/url";
import Link from "next/link";

function PiereCard({ title, description, href, icon: Icon }) {
  return (
    <Card className="w-72 flex flex-col">
      <CardHeader className="grid gap-4">
        {Icon && <Icon className="w-24 h-24 text-primary stroke-crimson-500" />}
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <p className="flex-grow">{description}</p>
      </CardContent>
      <CardFooter className="mt-auto pt-0 ">
        <Button
          variant="ghost"
          className="w-full justify-between items-center"
          asChild
        >
          <Link href={href || "#"}>
            Learn more
            <span className="sr-only">about {title}</span>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default PiereCard;
