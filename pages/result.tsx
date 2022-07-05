import { useRouter } from "next/router";
import Button from "../components/Button";
import { Score } from "../components/Score";

import styles from "../styles/pages/Result.module.css";

export default function Result() {
  const router = useRouter();

  const total = router.query.total ? +router.query.total : 0;
  const score = router.query.score ? +router.query.score : 0;
  const percentage = Math.round((score / total) * 100);

  return (
    <div className={styles.result}>
      <h1>Resultado</h1>

      <div className={styles.scoreboard}>
        <Score value={total} text="Perguntas" />
        <Score value={score} text="Certas" background="#2baa6d" color="#ddd" />
        <Score
          value={`${percentage}%`}
          text="Percentual"
          background="#e44a4c"
          color="#ddd"
        />
      </div>

      <div className={styles.button}>
        <Button href="/" text="Tentar novamente" />
      </div>
    </div>
  );
}
