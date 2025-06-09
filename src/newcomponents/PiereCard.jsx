import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

function PiereCard({ title, description, href, icon: Icon, ctaText }) {
  return (
    <div className="w-72 mb-2">
      <Card className="w-72 h-full flex flex-col border-crimson-500 ring-inset">
        <CardHeader className="flex-row gap-4 items-center">
          {Icon && <Icon className="w-6 h-6 text-primary stroke-crimson-500" />}
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col">
          <p className="flex-grow">{description}</p>
        </CardContent>
        <CardFooter className="mt-auto pt-0">
          {href === "#" ? (
            <Button
              variant="secondary"
              className="min-h-[48px] min-w-[48px] px-4 py-3 justify-between items-center border border-platinum-900 ring-inset bg-white"
              disabled
              aria-disabled="true"
            >
              <span className="text-platinum-900">
                {ctaText}
                <span className="sr-only">about {title}</span>
              </span>
            </Button>
          ) : (
            <Link href={href} passHref legacyBehavior>
              <Button
                asChild
                variant="secondary"
                className="min-h-[48px] min-w-[48px] px-4 py-3 justify-between items-center border border-crimson-500 ring-inset bg-white focus:bg-crimson-500 hover:bg-crimson-50 transition-colors"
              >
                <a>
                  {ctaText}
                  <span className="sr-only">about {title}</span>
                </a>
              </Button>
            </Link>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}

export default PiereCard;
