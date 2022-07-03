import { QuestModel } from "../models/quest";
import styles from "../styles/components/Question.module.css";
import Answer from "./Answer";
import { Timer } from "./Times";
import Wording from "./Wording";

const letters = [
  { value: "A", color: "#F2C866" },
  { value: "B", color: "#F266BA" },
  { value: "C", color: "#85D4F2" },
  { value: "D", color: "#BCE596" },
];

interface QuestionProps {
  value: QuestModel;
  timeToRespond?: number;
  selectQuestion: (index: number) => void;
  timeOut: () => void;
}

export default function Question({
  value,
  timeToRespond,
  selectQuestion,
  timeOut,
}: QuestionProps) {
  const renderAnswers = function () {
    return value.getAnswers.map((value, index) => {
      return (
        <Answer
          key={index}
          index={index}
          value={value}
          letter={letters[index].value}
          background={letters[index].color}
          selectQuestion={selectQuestion}
        />
      );
    });
  };

  return (
    <div className={styles.question}>
      <Wording value={value.getQuest} />
      <Timer duration={timeToRespond ?? 10} timeOut={timeOut} />
      {renderAnswers()}
    </div>
  );
}
