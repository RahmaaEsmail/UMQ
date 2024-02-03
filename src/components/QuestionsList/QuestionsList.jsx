import { useTranslation } from "react-i18next";
import Heading from "../Heading/Heading";
import QuestionItem from "../QuestionItem/QuestionItem";
import styles from "./QuestionsList.module.css";

export default function QuestionsList() {
  const { t } = useTranslation();
  return (
    <section className={`${styles.section} p-20`}>
      <Heading heading={t("question-heading")} />
      <div className={styles.questionsContainer}>
        <QuestionItem question={t("first-question")} answer={t('first-answer')}/>
        <QuestionItem question={t("second-question")} answer={t('third-answer')}/>
        <QuestionItem question={t("third-question")} answer={t('second-answer')} />
        <QuestionItem question={t("fourth-question")} />
        <QuestionItem question={t("last-question")} />
      </div>
    </section>
  );
}
