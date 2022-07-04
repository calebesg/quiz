import { useState } from "react";
import Questionnaire from "../components/Questionnaire";
import { AnswerModel } from "../models/answer";
import { QuestModel } from "../models/quest";

import styles from "../styles/pages/Home.module.css";

const questionMock = new QuestModel(1, "Qual sua cor favorita?", [
  AnswerModel.wrong("Verde"),
  AnswerModel.wrong("Amarela"),
  AnswerModel.wrong("Branca"),
  AnswerModel.right("Azul"),
]);

function Home() {
  const [question, setQuestion] = useState(questionMock);

  const questionFinished = (question: QuestModel) => {};

  return (
    <div className={styles.container}>
      <Questionnaire
        question={question}
        finish
        nextStep={() => {}}
        questionFinished={questionFinished}
      />
    </div>
  );
}

export default Home;
