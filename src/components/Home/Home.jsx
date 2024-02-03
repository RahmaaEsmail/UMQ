import { useEffect } from "react";
import Typed from "typed.js";
import { useTranslation } from "react-i18next";

import styles from "./Home.module.css";

const englishOptions = [
  "For deep cleaning services",
  "We promise you a unique experience with our services",
  "May God Bless You",
];
const arabicOptions = [
  "خدمات التنظيف العميق",
  "نعدكم بتجربة فريدة مع خدماتنا",
  "بارك الله فيكم",
];

export default function Home() {
  const { t, i18n } = useTranslation();
  console.log(i18n.language);
  useEffect(() => {
    const options = {
      strings: i18n.language == "en" ? englishOptions : arabicOptions,
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    };

    // Initialize Typed
    const typed = new Typed(".typed-text", options);

    // Clean up the Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, [i18n.language]);

  return (
    <>
      <div
        className={`${styles.home} grid gap-4 pt-36  grid-cols-2 bg-neutral-50  px-14 pb-7 h-auto`}
      >
        <div
          className={`${styles.homeTxt} flex items-middle justify-center flex-col  col-span-1 px-8 pt-10`}
        >
          <div>
            <h1 className="text_color text-4xl mt-5 font-bold	leading-relaxed">
              {t("homeHeading")}.
              <span className="typed-text">
                <br />
              </span>
            </h1>
          </div>

          <div className="pt-14">
            <p className="text-neutral-800 leading-relaxed">
              {t("home-paragraph")}
            </p>
          </div>

          <div>
            <div className={`${styles.input} pt-10 py-2 `}>
              <input
                type="tel"
                placeholder={t("input-placeholder")}
                className={`text_color placeholder-gray-500 bg-transparent appearance-none p-2 bg-white input-bordered focus:outline-none input-accent  w-full max-w-xs`}
              />
              <button
                class={`${styles.btn} ms-5 button_form border-none py-3 px-2`}
              >
                {t("change-btn")}
              </button>
            </div>
          </div>
        </div>

        <div className={styles.imgBox}>
          <img
            className={`${styles.homeImg} h-100`}
            src="/images/WhatsApp Image 2024-01-29 at 21.46.02_67ed76a2.jpg"
            alt="Home image"
          />
        </div>
      </div>
    </>
  );
}
