import Heading from "../Heading/Heading";
import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <section
      className={`${styles.pricingSection} bg-neutral-50 px-6 md:px-10 lg:px-30 py-14 lg:py-20  h-full`}
    >
      <Heading heading="Pricing" />

      <div className={styles.container}>
        <div className={`${styles.card} rounded-lg pb-24 xl:pb-0 w-full`}>
          <h3
            className={`font-bold text-3xl lg:text-4xl p-10 text-center border-b-4 border-gray-500 text-gray-500`}
          >
            Lite Package
          </h3>

          <div className="card-body p-0">
            <ul className="w-full  text-gray-500 text-center text-lg">
              <li className="border-b border-gray-500 py-6 text-sm lg:texl-base">
                500 tickets
              </li>
              <li className="border-b border-gray-500 py-6 text-sm lg:texl-base">
                Fully accessible dashboard.
              </li>
              <li className="border-b border-gray-500 py-6 text-sm lg:texl-base">
                Manage tickets on the go.
              </li>
              <li className="border-b border-gray-500 py-6 text-sm lg:texl-base ">
                Calendar for Reservations.
              </li>
              <li className="border-b border-gray-500 py-6 text-sm lg:texl-base">
                Generated QR code for store and branch.
              </li>
              <li className="border-b border-gray-500 py-6 text-sm lg:texl-base">
                Tickets status update notifications.
              </li>
              <li className="py-6 text-sm lg:texl-base">
                Tickets validation for 90 days.
              </li>
            </ul>
          </div>

          <div
            className={`absolute bottom-0 text-center py-8 w-full border-t border-gray-500`}
          >
            <p className="text-sm lg:texl-base">
              <del className="text-gray-400 font-bold">249.99</del>{" "}
              <span
                className={`${styles.price} text-gray-500 font-bold text-3xl lg:text-4xl`}
              >
                109.99
              </span>{" "}
              <span className="text-gray-500 font-semibold">SAR</span>
            </p>
          </div>
        </div>

        <div className={`${styles.card} rounded-lg pb-24 xl:pb-0`}>
          <div className="flex flex-col  p-10 text-center border-b-4 border-[#554d98] text-[#554d98]">
            <h3 className={`font-bold text-3xl lg:text-4xl `}>Plus Package</h3>
            <p className="mt-3 text-lg lg:text-xl">Recommended</p>
          </div>

          <div className="card-body p-0">
            <ul className="w-full  text-[#554d98] text-center text-lg">
              <li className="border-b border-[#554d98] py-6 font-semibold text-sm lg:texl-base">
                100 tickets
              </li>
              <li className="border-b border-[#554d98] py-6 font-semibold text-sm lg:texl-base">
                Fully accessible dashboard.
              </li>
              <li className="border-b border-[#554d98] py-6 font-semibold text-sm lg:texl-base">
                Employee permissions and access rule.
              </li>
              <li className="border-b border-[#554d98] py-6 font-semibold text-sm lg:texl-base">
                Reports and KPIs.
              </li>
              <li className="border-b border-[#554d98] py-6 font-semibold text-sm lg:texl-base">
                Manage tickets on the go.
              </li>
              <li className="border-b border-[#554d98] py-6 font-semibold text-sm lg:texl-base">
                Calendar for Reservations.
              </li>
              <li className="border-b border-[#554d98] py-6 font-semibold text-sm lg:texl-base">
                Generated QR code for store and branch.
              </li>
              <li className="border-b border-[#554d98] py-6 font-semibold text-sm lg:texl-base">
                Tickets status update notifications.
              </li>
              <li className="py-6 font-semibold text-sm lg:texl-base">
                Tickets validation for 90 days.
              </li>
            </ul>
          </div>
          <div
            className={`absolute bottom-0 text-center py-8 w-full border-t border-[#554d98]`}
          >
            <p className="text-sm lg:texl-base">
              <del className="text-[#554d9880] font-bold">524.99</del>{" "}
              <span
                className={`${styles.price} text-[#554d98] font-bold text-3xl lg:text-4xl`}
              >
                199.99
              </span>{" "}
              <span className="text-[#554d98] font-semibold">SAR</span>
            </p>
          </div>
        </div>

        <div className={`${styles.card} ${styles.lastCard} rounded-lg `}>
          <h3
            className={`font-bold text-3xl lg:text-4xl p-10 text-center border-b-4 border-gray-500 text-gray-500`}
          >
            Pro Package
          </h3>

          <div className="card-body p-0">
            <ul className="w-full  text-gray-500 text-center text-lg">
              <li className="border-b border-gray-500 py-6 text-sm lg:texl-base">
                2000 tickets
              </li>
              <li className="border-b border-gray-500 py-6 text-sm lg:texl-base">
                Fully accessible dashboard.
              </li>
              <li className="border-b border-gray-500 py-6 text-sm lg:texl-base">
                Employee permissions and access rule.
              </li>
              <li className="border-b border-gray-500 py-6 text-sm lg:texl-base">
                Reports and KPIs.
              </li>
              <li className="border-b border-gray-500 py-6 text-sm lg:texl-base">
                Unlimited branches and services.
              </li>
              <li className="border-b border-gray-500 py-6 text-sm lg:texl-base">
                Fully customizable store.
              </li>
              <li className="border-b border-gray-500 py-6 text-sm lg:texl-base">
                Manage tickets on the go.
              </li>
              <li className="border-b border-gray-500 py-6 text-sm lg:texl-base">
                Calendar for Reservations.
              </li>
              <li className="border-b border-gray-500 py-6 text-sm lg:texl-base">
                Generated QR code for store and branch.
              </li>
              <li className="border-b border-gray-500 py-6 text-sm lg:texl-base">
                Tickets status update notifications.
              </li>
              <li className="border-b border-gray-500 py-6 text-sm lg:texl-base">
                Tickets validation for 90 days.
              </li>
            </ul>
          </div>

          <div className={`absolute bottom-0 text-center py-7  w-full`}>
            <p className="text-sm lg:texl-base">
              <del className="text-gray-400 font-bold">999.99</del>{" "}
              <span
                className={`${styles.price} text-gray-500 font-bold text-3xl lg:text-4xl`}
              >
                369.99{" "}
              </span>{" "}
              <span className="text-gray-500 font-semibold">SAR</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
