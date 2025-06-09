import { getTranslations } from "next-intl/server";
import ArticleHeredityScreening from "./components/ArticleHeredityScreening";
export async function generateMetadata() {
  const t = await getTranslations("seo"); // Load translations for the 'seo' namespace

  return {
    title: t("hereditaryCancerScreeningPage.title"), // Specific title for this page
    description: t("hereditaryCancerScreeningPage.description"),
    keywords: t("hereditaryCancerScreeningPage.keywords"),
  };
}
function page() {
  return (
    <div>
      <ArticleHeredityScreening />
    </div>
  );
}

export default page;
