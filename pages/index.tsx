import { useState } from "react";
import Question from "../components/Question";
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

  const selectQuestion = function (index: number) {
    console.log(index);
    setQuestion(question.revelQuestion(index));
  };

  return (
    <div className={styles.container}>
      <Question value={question} selectQuestion={selectQuestion} />
    </div>
  );
}

export default Home;
