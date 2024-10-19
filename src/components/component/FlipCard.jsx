import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function FlipCard({
  image,
  title,
  description,
  subtitle,
  href,
  rotate = "y",
  className,
  ...props
}) {
  const rotationClass = {
    x: [
      "group-hover:[transform:rotateX(180deg)]",
      "[transform:rotateX(180deg)]",
    ],
    y: [
      "group-hover:[transform:rotateY(180deg)]",
      "[transform:rotateY(180deg)]",
    ],
  };
  const self = rotationClass[rotate];

  return (
    <div
      className={cn("group h-64 max-w-full [perspective:1000px]", className)}
      {...props}
    >
      <div
        className={cn(
          "relative h-full rounded-[30px] transition-all duration-500 [transform-style:preserve-3d] border border-crimson-500 ring-4 ring-crimson-300",
          self[0]
        )}
      >
        {/* Front */}
        <div className="absolute h-full w-full flex items-center justify-center [backface-visibility:hidden]">
          {/*  <Image
            src={image}
            alt="image"
            height={200}
            width={200}
            className="h-full w-full rounded-2xl object-cover shadow-2xl shadow-black/40"
          /> */}
          {/*  <div className="bg-black/80 p-2 rounded-md absolute bottom-4 left-4 text-xl font-bold text-white overflow-hidden">
            {title}
          </div> */}
          <div className=" p-2 rounded-md flex items-center justify-center  text-xl font-bold text-black overflow-hidden">
            {title}
          </div>
        </div>

        {/* Back */}
        <div
          className={cn(
            "absolute h-full w-full rounded-[30px] bg-black/80 p-4 text-platinum-200 [backface-visibility:hidden] overflow-hidden",
            self[1]
          )}
        >
          <div className="flex min-h-full flex-col gap-2 justify-between">
            <div>
              <h1 className="text-xl font-bold text-white">{subtitle}</h1>
              <p className="mt-1 border-t border-t-platinum-200 py-4 text-sm font-medium leading-normal text-platinum-100">
                {description}
              </p>
            </div>
            <Button className="w-full">
              <Link
                href={href}
                className="w-full h-full items-center justify-center"
              >
                Learn more
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
