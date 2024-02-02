import { useEffect } from "react";
import Typed from "typed.js";

import styles from "./Home.module.css";
// import homeImg from '/images/WhatsApp Image 2024-01-29 at 21.46.02_67ed76a2.jpg'

export default function Home() {
  useEffect(() => {
    // Your text options go here
    const options = {
      strings: [
        "For deep cleaning services",
        "We promise you a unique experience with our services",
        "May God Bless You",
      ],
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
  }, []);

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
              Welcome To Your Website <br /> and Your Place{" "}
              <span className="place">UMQ</span> <br />
              <span className="typed-text">
                <br />
              </span>
            </h1>
          </div>

          <div className="pt-14">
            <p className="text-neutral-800 leading-relaxed">
              We are a specialized cleaning company dedicated to providing
              high-quality and reliable cleaning services. Our team consists of
              skilled professionals who undergo rigorous training and are
              equipped with the latest technologies and tools to ensure the
              efficient and effective delivery of our services.
            </p>
          </div>

          <div>
            <div className={`${styles.input} pt-10 py-2 `}>
              <input
                type="tel"
                placeholder="Type here"
                className={`text_color placeholder-gray-500 bg-transparent appearance-none p-2 bg-white input-bordered focus:outline-none input-accent  w-full max-w-xs`}
              />
              <button
                class={`${styles.btn} ms-5 button_form border-none py-3 px-2`}
              >
                Save changes
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
