import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";

export default function FlipCard({
  image,
  title,
  description,
  subtitle,
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
      className={cn("group h-72 w-56 [perspective:1000px]", className)}
      {...props}
    >
      <div
        className={cn(
          "relative h-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]",
          self[0]
        )}
      >
        {/* Front */}
        <div className="absolute h-full w-full [backface-visibility:hidden]">
          <Image
            src={image}
            alt="image"
            height={200}
            width={200}
            className="h-full w-full rounded-2xl object-cover shadow-2xl shadow-black/40"
          />
          <div className="absolute bottom-4 left-4 text-xl font-bold text-black">
            {title}
          </div>
        </div>

        {/* Back */}
        <div
          className={cn(
            "absolute h-full w-full rounded-2xl bg-black/80 p-4 text-slate-200 [backface-visibility:hidden]",
            self[1]
          )}
        >
          <div className="flex min-h-full flex-col gap-2 justify-between">
            <div>
              <h1 className="text-xl font-bold text-white">{subtitle}</h1>
              <p className="mt-1 border-t border-t-gray-200 py-4 text-base font-medium leading-normal text-gray-100">
                {description}
              </p>
            </div>
            <Button>Learn more</Button>
          </div>
        </div>
      </div>
    </div>
  );
}