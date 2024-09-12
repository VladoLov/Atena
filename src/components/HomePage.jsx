import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <p>{t("test_status")}: Order Received</p>
    </div>
  );
};

export default HomePage;
