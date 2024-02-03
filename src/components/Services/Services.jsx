import { useTranslation } from "react-i18next";
import Carousel from "../Carousel/Carousel";
import Heading from "../Heading/Heading";
import styles from "./Services.module.css";

export default function Services() {
  const {t} = useTranslation();

  return (
    <section className={`${styles.services} p-20`}>
      <Heading heading={t('feature-title')} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
        <div className="flex flex-col justify-between gap-24">
          <div className={`${styles.cardText} text-center  m-auto`}>
            <h4 className="text-3xl text-[#554d98] font-bold pb-8 tracking-wide	">
              {t('feature-heading1')}
            </h4>
            <p className="text-[#4d4589] leading-6 text-lg">
              {t('feature-paragraph1')}
            </p>
          </div>

          <div className={`${styles.cardText} text-center  m-auto`}>
            <h4 className="text-3xl text-[#554d98] font-bold pb-8">
            {t('feature-heading3')}
            </h4>
            <p className="text-[#4d4589] leading-6 text-lg">
            {t('feature-paragraph3')}
            </p>
          </div>
        </div>
        <div className="my-auto">
          <Carousel />
        </div>

        <div className="flex flex-col justify-between gap-24">
          <div className={`${styles.cardText} text-center  m-auto`}>
            <h4 className="text-3xl text-[#554d98] font-bold pb-8 tracking-wide leading-normal">
            {t('feature-heading2')}
            </h4>
            <p className="text-[#4d4589] leading-6 text-lg">
            {t('feature-paragraph2')}
            </p>
          </div>

          <div className={`${styles.cardText} text-center  m-auto`}>
            <h4 className="text-3xl text-[#554d98] font-bold pb-8">
            {t('feature-heading4')}
            </h4>
            <p className="text-[#4d4589] leading-6 text-lg">
            {t('feature-paragraph4')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
