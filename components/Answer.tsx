import { AnswerModel } from "../models/answer";

import styles from "../styles/components/Answer.module.css";

interface AnswerProps {
  value: AnswerModel;
  index: number;
  letter: string;
  background: string;
  selectQuestion: (index: number) => void;
}

export default function Answer(props: AnswerProps) {
  const { background, letter, value } = props;

  const reveled = value.getReveled ? styles.reveled : "";

  return (
    <div
      className={styles.answer}
      onClick={() => props.selectQuestion(props.index)}
    >
      <div className={`${styles.wrapper} ${reveled}`}>
        <div className={styles.content}>
          <span
            style={{ backgroundColor: background }}
            className={styles.letter}
          >
            {letter}
          </span>
          <strong className={styles.value}>{value.getValue}</strong>
        </div>

        <div className={styles.sided}>
          {value.getIsRight ? (
            <div className={styles.right}>
              <div>A resposta certa é...</div>
              <div className={styles.value}>{value.getValue}</div>
            </div>
          ) : (
            <div className={styles.wrong}>
              <div>A resposta informada está errada...</div>
              <div className={styles.value}>{value.getValue}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
