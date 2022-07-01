import { QuestModel } from "../models/quest";
import styles from "../styles/components/Question.module.css";
import Wording from "./Wording";

interface QuestionProps {
  value: QuestModel;
}

export default function Question({ value }: QuestionProps) {
  return (
    <div className={styles.question}>
      <Wording value={value.getQuest} />
    </div>
  );
}
