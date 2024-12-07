import { Suspense } from "react";
import Loading from "./loading";
import MainContent from "@/newcomponents/MainContent";

export const metadata = {
  title: { template: "%s Atena Genomics", default: "ATENA Genomics" },
};

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <MainContent />
    </Suspense>
  );
}
