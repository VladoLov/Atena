export async function generateMetadata({ params }) {
  const { t } = await serverSideTranslations(params.locale, ["common"]);

  return {
    title: t("title"),
    description: t("description"),
  };
}
