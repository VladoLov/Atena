import { cn } from "@/lib/utils";

import Link from "next/link";

export default function FlipCard({
  image,
  title,
  description,
  subtitle,
  href,
  icon: Icon,
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
          "relative h-full rounded-[30px] transition-all duration-500 [transform-style:preserve-3d] border border-crimson-500 bg-hexagon filter backdrop-brightness-120 bg-center bg-cover ring-4 ring-crimson-300",
          self[0]
        )}
      >
        {/* Front */}
        {/*     <div className="absolute h-full w-full flex items-center justify-center [backface-visibility:hidden]">
          <div className="p-2 rounded-md flex flex-col  items-center justify-center  text-3xl font-bold  text-black overflow-hidden">
            {icon && (
              <div
                className="h-12 w-12 mb-2 mr-2 "
                // Correctly structured dangerouslySetInnerHTML
                dangerouslySetInnerHTML={{ __html: icon }}
              />
            )}
            <div className="text-center">{title}</div>
          </div>
        </div> */}
        <div className="absolute h-full w-full flex items-center justify-center [backface-visibility:hidden] ">
          <div className="p-2 rounded-md flex flex-col items-center justify-center text-3xl font-bold text-foreground overflow-hidden ">
            {Icon && (
              <Icon
                className="h-12 w-12 mb-2 stroke-crimson-500"
                strokeWidth={1.5}
              />
            )}
            <div className="text-center">{title}</div>
          </div>
        </div>

        {/* Back */}
        <div
          className={cn(
            "absolute h-full w-full rounded-[30px] bg-white/80 p-4 text-black [backface-visibility:hidden] overflow-hidden",
            self[1]
          )}
        >
          {href === "#" ? (
            <div className="flex min-h-full flex-col justify-between cursor-default">
              <div>
                <h1 className="text-xl font-bold text-gray-400">{title}</h1>
                <p className="mt-1 border-t border-t-platinum-900 py-4 lg:text-base md:text-sm font-medium leading-normal text-gray-400">
                  {description}
                </p>
              </div>
            </div>
          ) : (
            <Link
              className="flex min-h-full flex-col justify-between"
              href={href}
            >
              <div>
                <h1 className="text-xl font-bold text-black">{title}</h1>
                <p className="mt-1 border-t border-t-platinum-900 py-4 lg:text-base md:text-sm font-medium leading-normal text-black-100">
                  {description}
                </p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
