import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

import Link from "next/link";

function PiereCard({ title, description, href, icon: Icon }) {
  return (
    <div className="w-72">
      <Card className="w-72 h-full flex flex-col  font-poppins">
        <CardHeader className="flex-row gap-4 items-center">
          {Icon && <Icon className="w-6 h-6 text-primary stroke-crimson-500" />}
          {/* {icon} */}

          <CardTitle className="text-lg font-poppins">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col">
          <p className="flex-grow">{description}</p>
        </CardContent>
        <CardFooter className="mt-auto pt-0 ">
          <Button
            variant="ghost"
            className="w-full justify-between items-center"
          >
            <Link href={href || "#"}>
              Learn more
              <span className="sr-only">about {title}</span>
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default PiereCard;
