import Heading from '../Heading/Heading';
import QuestionItem from '../QuestionItem/QuestionItem';
import styles from './QuestionsList.module.css';

export default function QuestionsList() {
  return (
    <section className={`${styles.section} p-20`}>
      <Heading  heading={'Frequently Asked Questions'}/>
      <div className={styles.questionsContainer}>
        <QuestionItem question="What is UMQ?" />
        <QuestionItem question="What Can UMQ do for you?" />
        <QuestionItem question="How Can the user maje a UMQ?" />
        <QuestionItem question="How many branches, Services ?" />
        <QuestionItem question="Can I use UMQ offline without an internet connection?" />
      </div>
    </section>
  );
}
