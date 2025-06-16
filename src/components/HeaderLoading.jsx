import { Skeleton } from "./ui/skeleton";

function HeaderLoading() {
  return (
    <div className="w-full flex items-center justify-between gap-6">
      <Skeleton className="h-8 w-12  bg-platinum-200 dark:bg-platinum-700" />
      <Skeleton className="h-8 w-20  bg-platinum-200 dark:bg-platinum-700" />
      <Skeleton className="h-8 w-20  bg-platinum-200 dark:bg-platinum-700" />
      <Skeleton className="h-8 w-20  bg-platinum-200 dark:bg-platinum-700" />
    </div>
  );
}

export default HeaderLoading;
