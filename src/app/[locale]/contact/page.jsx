import ContactForm from "@/components/ContatForm";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  // Use getTranslations directly, as the 'keywords' value is now a string
  const t = await getTranslations({ locale, namespace: "seo" });

  return {
    title: t("contactPage.title"),
    description: t("contactPage.description"),
    keywords: t("contactPage.keywords"), // This will now correctly return a string
    // ... other metadata properties (openGraph, twitter, etc.)
  };
}
function page() {
  return (
    <div>
      <div className="max-w-screen-md mx-auto py-8">
        <ContactForm />
      </div>
    </div>
  );
}

export default page;
