import logoImg from "/images/UMQ LOGO.png";
import styles from './Footer.module.css';
import { FaInstagram , FaTiktok , FaSnapchat , FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={`${styles.footer} bg-neutral-300   py-7 px-7 gap-4`}>
        <div className="logo mt-8 w-60 ml-3">
           <img src={logoImg} alt="UMQ LOGO" className="w-100" />
        </div>

        <div className="flex flex-col gap-7 mt-8">
            <h3 className={`${styles.heading} text-1xl font-bold`}>About Us</h3>
            <p className="leading-8 text-base"> UMQ Provides excellent service and good customer service , If you
              would like us to contact With you, write your number and Our team
              won't fall short</p>
        </div>

        <div className="flex flex-col gap-7 mt-8">
            <h3 className={`${styles.heading} text-1xl font-bold text-center`}>Follow us</h3>
            <ul className={`${styles.iconsList} flex justify-center gap-8 align-middle`}>
                <li><a href="https://www.instagram.com/taketkt/" target="_blank"><FaInstagram /></a></li>
                <li><a href="https://www.tiktok.com/@taketkt" target="_blank"><FaTiktok /></a></li>
                <li><a href="https://www.snapchat.com/add/taketkt" target="_blank"><FaSnapchat /></a></li>
                <li><a href="https://twitter.com/taketkt" target="_blank"><FaTwitter /></a></li>
            </ul>
            </div>
            <div className="flex flex-col gap-7 mt-8 ml-9">
                <h3 className={`${styles.heading} text-1xl font-bold`}>WORKING WITH THE BEST</h3>
                <div className={`${styles.payment}`}>
                    <img src="/images/mada.svg" alt="Mada" />
                    <img src="/images/mastercard.svg" alt="Master Card" />
                    <img src="/images/visa.svg" alt="Visa" />
                    <img src="/images/stc_pay.svg" alt="Mada" />
                    <img src="/images/amex.svg" alt="Mada" />
                    <img src="/images/apple_pay.svg" alt="Mada" />
                </div>
            </div>

            <div className="mt-8">
                <img src="/images/SBC-logo.svg" alt="" />
            </div>
    </footer>
  )
}
