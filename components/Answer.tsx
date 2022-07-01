import { AnswerModel } from "../models/answer";

import styles from "../styles/components/Answer.module.css";

interface AnswerProps {
  value: AnswerModel;
  index: number;
  letter: string;
  background: string;
}

export default function Answer(props: AnswerProps) {
  const { background, letter, value } = props;

  return (
    <div className={styles.answer}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <span
            style={{ backgroundColor: background }}
            className={styles.letter}
          >
            {letter}
          </span>
          <strong className={styles.value}>{value.getValue}</strong>
        </div>
        <div className={styles.sided}></div>
      </div>
    </div>
  );
}
