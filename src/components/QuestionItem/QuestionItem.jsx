import { useTranslation } from "react-i18next";
import styles from "./QuestionItem.module.css";

export default function QuestionItem({ question , answer }) {
  if(answer) {
    answer = answer.split('.');
  }
  return (
    <div className={`${styles.collapseBox} collapse collapse-arrow`}>
      <input type="radio" name="my-accordion-2" />
      <div
        className={`${styles.question} collapse-title text-lg lg:text-xl font-medium text-white`}
      >
        {question}
      </div>
      <div className={`${styles["collapse-content"]} collapse-content`}>
        <p className={`${styles.answer} text-white text-sm lg:text-lg`}>
          {answer ? (
            answer.map((ans , index) => <p key={ans}>{index+1}- {ans}</p>)
          ) :'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem sunt omnis ratione nulla vitae voluptatibus atque soluta veritatis labore quod ipsam dolorem itaque accusamus natus fugiat, at mollitia quo vero!'}
        </p>
      </div>
    </div>
  );
}
