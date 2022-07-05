import styles from "../styles/components/Score.module.css";

interface ScoreProps {
  value: any;
  text: string;
  color?: string;
  background?: string;
}

export function Score(props: ScoreProps) {
  return (
    <div className={styles.score}>
      <div
        className={styles.value}
        style={{
          backgroundColor: props.background ?? "#FDD60F",
          color: props.color ?? "#333",
        }}
      >
        {props.value}
      </div>

      <div className={styles.text}>{props.text}</div>
    </div>
  );
}
