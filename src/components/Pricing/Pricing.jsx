import { t } from "i18next";
import Heading from "../Heading/Heading";
import styles from "./Pricing.module.css";
import { useTranslation } from "react-i18next";

export default function Pricing() {
  const {t} = useTranslation();
  return (
    <section
      className={`${styles.pricingSection} bg-neutral-50 px-6 md:px-10 lg:px-30 py-14 lg:py-20  h-full`}
    >
      <Heading heading={t("pricing-title")} />

      <div className={styles.container}>
        <div className={`${styles.card} rounded-lg pb-24 xl:pb-0 w-full`}>
          <h3
            className={`font-bold text-3xl lg:text-4xl p-10 text-center border-b-4 border-gray-500 text-gray-500`}
          >
            {t("lite-heading")}
          </h3>

          <div className="card-body p-0">
            <ul className="w-full  text-gray-500 text-center text-lg">
              <li className="border-b border-gray-500 py-6 text-sm lg:texl-base">
                {t("lite-ticket")}
              </li>
              <li className="border-b border-gray-500 py-6 text-sm lg:texl-base">
                {t("lite-accessible")}
              </li>
              <li className="border-b border-gray-500 py-6 text-sm lg:texl-base">
                {t("lite-permissions")}
              </li>
              <li className="border-b border-gray-500 py-6 text-sm lg:texl-base ">
                {t("lite-reservations")}
              </li>
              <li className="border-b border-gray-500 py-6 text-sm lg:texl-base">
                {t("lite-QRcode")}
              </li>
              <li className="border-b border-gray-500 py-6 text-sm lg:texl-base">
                {t("lite-notification")}
              </li>
              <li className="py-6 text-sm lg:texl-base">
                {t("lite-validation")}
              </li>
            </ul>
          </div>

          <div
            className={`absolute bottom-0 text-center py-8 w-full border-t border-gray-500`}
          >
            <p className="text-sm lg:texl-base">
              <del className="text-gray-400 font-bold">
                {t("lite-new-price")}
              </del>{" "}
              <span
                className={`${styles.price} text-gray-500 font-bold text-3xl lg:text-4xl`}
              >
                {t("lite-old-price")}
              </span>{" "}
              <span className="text-gray-500 font-semibold">{t("coin")}</span>
            </p>
          </div>
        </div>

        <div className={`${styles.card} rounded-lg pb-24 xl:pb-0`}>
          <div className="flex flex-col  p-10 text-center border-b-4 border-[#554d98] text-[#554d98]">
            <h3 className={`font-bold text-3xl lg:text-4xl `}>
              {t("plus-heading")}
            </h3>
            <p className="mt-3 text-lg lg:text-xl">{t("plus-sub-heading")}</p>
          </div>

          <div className="card-body p-0">
            <ul className="w-full  text-[#554d98] text-center text-lg">
              <li className="border-b border-[#554d98] py-6 font-semibold text-sm lg:texl-base">
                {t("plus-ticket")}
              </li>
              <li className="border-b border-[#554d98] py-6 font-semibold text-sm lg:texl-base">
                {t("plus-accessible")}
              </li>
              <li className="border-b border-[#554d98] py-6 font-semibold text-sm lg:texl-base">
                {t("plus-permissions")}
              </li>
              <li className="border-b border-[#554d98] py-6 font-semibold text-sm lg:texl-base">
                {t("plus-reports")}
              </li>
              <li className="border-b border-[#554d98] py-6 font-semibold text-sm lg:texl-base">
                {t("plus-manage")}
              </li>
              <li className="border-b border-[#554d98] py-6 font-semibold text-sm lg:texl-base">
                {t("plus-reservations")}
              </li>
              <li className="border-b border-[#554d98] py-6 font-semibold text-sm lg:texl-base">
                {t("plus-QRcode")}
              </li>
              <li className="border-b border-[#554d98] py-6 font-semibold text-sm lg:texl-base">
                {t("plus-notification")}
              </li>
              <li className="py-6 font-semibold text-sm lg:texl-base">
                {t("plus-validation")}
              </li>
            </ul>
          </div>
          <div
            className={`absolute bottom-0 text-center py-8 w-full border-t border-[#554d98]`}
          >
            <p className="text-sm lg:texl-base">
              <del className="text-[#554d9880] font-bold">
                {t("plus-old-price")}
              </del>{" "}
              <span
                className={`${styles.price} text-[#554d98] font-bold text-3xl lg:text-4xl`}
              >
                {t("plus-new-price")}
              </span>{" "}
              <span className="text-[#554d98] font-semibold">{t("coin")}</span>
            </p>
          </div>
        </div>

        <div className={`${styles.card} ${styles.lastCard} rounded-lg `}>
          <h3
            className={`font-bold text-3xl lg:text-4xl p-10 text-center border-b-4 border-gray-500 text-gray-500`}
          >
            {t("pro-heading")}
          </h3>

          <div className="card-body p-0">
            <ul className="w-full  text-gray-500 text-center text-lg">
              <li className="border-b border-gray-500 py-6 text-sm lg:texl-base">
                {t("pro-ticket")}
              </li>
              <li className="border-b border-gray-500 py-6 text-sm lg:texl-base">
                {t("pro-accessible")}
              </li>
              <li className="border-b border-gray-500 py-6 text-sm lg:texl-base">
                {t("pro-permissions")}
              </li>
              <li className="border-b border-gray-500 py-6 text-sm lg:texl-base">
                {t("pro-reports")}
              </li>
              <li className="border-b border-gray-500 py-6 text-sm lg:texl-base">
                {t("pro-services")}
              </li>
              <li className="border-b border-gray-500 py-6 text-sm lg:texl-base">
                {t("pro-store")}
              </li>
              <li className="border-b border-gray-500 py-6 text-sm lg:texl-base">
                {t("pro-manage")}
              </li>
              <li className="border-b border-gray-500 py-6 text-sm lg:texl-base">
                {t("pro-reservations")}
              </li>
              <li className="border-b border-gray-500 py-6 text-sm lg:texl-base">
                {t("pro-QRcode")}
              </li>
              <li className="border-b border-gray-500 py-6 text-sm lg:texl-base">
                {t("pro-notification")}
              </li>
              <li className="border-b border-gray-500 py-6 text-sm lg:texl-base">
                {t("pro-validation")}
              </li>
            </ul>
          </div>

          <div className={`absolute bottom-0 text-center py-7  w-full`}>
            <p className="text-sm lg:texl-base">
              <del className="text-gray-400 font-bold">
                {t("pro-old-price")}
              </del>{" "}
              <span
                className={`${styles.price} text-gray-500 font-bold text-3xl lg:text-4xl`}
              >
                {t("pro-new-price")}{" "}
              </span>{" "}
              <span className="text-gray-500 font-semibold">{t("coin")}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
