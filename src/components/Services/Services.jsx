import Carousel from "../Carousel/Carousel";
import Heading from "../Heading/Heading";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section className={`${styles.services} p-20`}>
      <Heading heading="UMQ" />
      <div className="grid grid-cols-3 gap-20">
        <div className="flex flex-col justify-between gap-24">
          <div className="text-center">
            <h4 className="text-3xl text-[#554d98] font-bold pb-8 tracking-wide	">
              Wait From Anywhere
            </h4>
            <p className="text-[#4d4589] leading-6 text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius eos
              vitae repellendus in amet. Ullam obcaecati perspiciatis hic harum
              qui iure optio, necessitatibus vitae! Impedit dolores nobis
              laborum consequuntur optio?
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-3xl text-[#554d98] font-bold pb-8">
              Dashboard
            </h4>
            <p className="text-[#4d4589] leading-6 text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
              sunt omnis ratione nulla vitae voluptatibus atque soluta veritatis
              labore quod ipsam dolorem itaque accusamus natus fugiat, at
              mollitia quo vero!
            </p>
          </div>
        </div>
        <div>
          <Carousel />
        </div>

        <div className="flex flex-col justify-between gap-24">
          <div className="text-center">
            <h4 className="text-3xl text-[#554d98] font-bold pb-8 tracking-wide leading-normal">
              Reserve And Manage Future Appointments
            </h4>
            <p className="text-[#4d4589] leading-6 text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius eos
              vitae repellendus in amet. Ullam obcaecati perspiciatis hic harum
              qui iure optio, necessitatibus vitae! Impedit dolores nobis
              laborum consequuntur optio?
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-3xl text-[#554d98] font-bold pb-8">
              Real-Time Notification
            </h4>
            <p className="text-[#4d4589] leading-6 text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
              sunt omnis ratione nulla vitae voluptatibus atque soluta veritatis
              labore quod ipsam dolorem itaque accusamus natus fugiat, at
              mollitia quo vero!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
