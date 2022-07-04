import { QuestModel } from "../models/quest";
import Question from "./Question";

import styles from "../styles/components/Questionnaire.module.css";
import Button from "./Button";

interface QuestionnaireProps {
  question: QuestModel;
  finish: boolean;
  questionFinished: (question: QuestModel) => void;
  nextStep: () => void;
}

export default function Questionnaire(props: QuestionnaireProps) {
  const btnLabel = props.finish ? "Terminar" : "Próxima";

  const answerQuestion = function (index: number) {
    if (props.question.answered) return;
    props.questionFinished(props.question.revelQuestion(index));
  };

  return (
    <div className={styles.questionnaire}>
      <Question
        value={props.question}
        timeToRespond={10}
        selectQuestion={answerQuestion}
        timeOut={props.nextStep}
      />

      <Button text={btnLabel} onClick={props.nextStep} />
    </div>
  );
}
