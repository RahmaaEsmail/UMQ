import styles from "./QuestionItem.module.css";

export default function QuestionItem({ question }) {
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          excepturi a nostrum, quae cum maiores voluptatum sequi quam iusto
          molestias saepe alias aut nisi officia esse temporibus ratione,
          suscipit voluptate.
        </p>
      </div>
    </div>
  );
}
