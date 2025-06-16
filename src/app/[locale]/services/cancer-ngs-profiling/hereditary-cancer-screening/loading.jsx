import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <main className="w-full">
        {/* Hero Section Skeleton */}
        <section className="min-w-max z-[-1] relative h-[300px] md:h-[400px] lg:h-[500px]">
          <Skeleton className="w-full h-full" />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center">
            <Skeleton className="h-12 md:h-16 lg:h-20 w-3/4 max-w-2xl mb-4 bg-white/20" />
            <Skeleton className="h-6 md:h-8 lg:h-10 w-1/2 max-w-lg bg-white/20" />
          </div>
        </section>

        <div className="container mx-auto py-12 px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Header Section Skeleton */}
            <div className="space-y-4">
              <Skeleton className="h-10 md:h-12 w-3/4 max-w-2xl" />
              <div className="flex items-center gap-2">
                <Skeleton className="h-1 w-20 rounded-full" />
                <Skeleton className="h-1 w-10 rounded-full" />
                <Skeleton className="h-1 w-5 rounded-full" />
              </div>
              <Skeleton className="h-7 w-2/3 max-w-lg" />
            </div>

            {/* Main Content Section Skeleton */}
            <div className="space-y-8">
              {/* First Card Skeleton */}
              <Card className="border-gray-200">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0">
                      <Skeleton className="w-16 h-16 rounded-full" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                      <div className="mt-3 space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-2/3" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Second Card Skeleton */}
              <Card className="border-gray-200 bg-gradient-to-br from-gray-50 to-white">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0">
                      <Skeleton className="w-16 h-16 rounded-full" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <Skeleton className="h-6 w-1/3" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-5/6" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Third Card Skeleton */}
              <Card className="border-gray-200">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0">
                      <Skeleton className="w-16 h-16 rounded-full" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <Skeleton className="h-6 w-1/2" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-4/5" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action Skeleton */}
            <div className="bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl p-8">
              <div className="max-w-3xl mx-auto text-center space-y-4">
                <Skeleton className="h-8 w-1/2 mx-auto" />
                <Skeleton className="h-5 w-3/4 mx-auto" />
                <Skeleton className="h-5 w-2/3 mx-auto" />
                <div className="mt-6">
                  <Skeleton className="h-12 w-40 mx-auto rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
