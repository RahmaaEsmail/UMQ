import { useEffect, useState } from "react";
import styles from "./Carousel.module.css";

const images = [
  {
    imageUrl: "/images/WhatsApp Image 2024-01-29 at 21.45.18_d0322dff.jpg",
    alt: "image 1",
  },
  {
    imageUrl: "/images/WhatsApp Image 2024-01-29 at 21.45.31_c227b394.jpg",
    alt: "image 2",
  },
  {
    imageUrl: "/images/WhatsApp Image 2024-01-29 at 21.45.42_c3f03d51.jpg",
    alt: "image 3",
  },
  {
    imageUrl: "/images/WhatsApp Image 2024-01-29 at 21.46.02_67ed76a2.jpg",
    alt: "image 4",
  },
];
export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearTimeout(interval);
  }, [currentIndex]);

  return (
    <div>
      <div className={`${styles.slideshow}`}>
        <div
          className={styles.slideshowSlider}
          style={{ transform: `translate3d(${-currentIndex * 100}%, 0, 0)` }}
        >
          {images.map((image, index) => (
            <img
              className={styles.slide}
              key={index}
              src={image.imageUrl}
              alt={image.alt}
            ></img>
          ))}
        </div>

        <div className={styles.slideshowDots}>
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`${styles.slideshowDot} ${
                currentIndex === idx ? styles.active : ""
              }`}
              onClick={() => {
                setCurrentIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
