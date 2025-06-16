import AboutMarija from "./componets/AboutMarija";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  // Use getTranslations directly, as the 'keywords' value is now a string
  const t = await getTranslations({ locale, namespace: "seo" });

  return {
    title: t("aboutPage.title"),
    description: t("aboutPage.description"),
    keywords: t("aboutPage.keywords"), // This will now correctly return a string
    // ... other metadata properties (openGraph, twitter, etc.)
  };
}
function page() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start bg-platinum-300 bg-transparent">
      <AboutMarija />
    </div>
  );
}

export default page;
