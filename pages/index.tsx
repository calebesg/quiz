import Answer from "../components/Answer";
import Question from "../components/Question";
import { AnswerModel } from "../models/answer";
import { QuestModel } from "../models/quest";

import styles from "../styles/pages/Home.module.css";

function Home() {
  const question = new QuestModel(1, "Qual sua cor favorita?", [
    AnswerModel.wrong("Verde"),
    AnswerModel.wrong("Amarela"),
    AnswerModel.wrong("Branca"),
    AnswerModel.right("Azul"),
  ]);

  const renderAnswers = function () {
    return question.getAnswers.map((value, index) => {
      return (
        <Answer
          key={index}
          index={index}
          value={value}
          letter="A"
          background="#F2C866"
        />
      );
    });
  };

  return (
    <div className={styles.container}>
      <Question value={question} />
      {renderAnswers()}
    </div>
  );
}

export default Home;
