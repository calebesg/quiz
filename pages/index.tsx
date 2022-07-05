import { useEffect, useState } from "react";
import Questionnaire from "../components/Questionnaire";
import { AnswerModel } from "../models/answer";
import { QuestModel } from "../models/quest";

const questionMock = new QuestModel(1, "Qual sua cor favorita?", [
  AnswerModel.wrong("Verde"),
  AnswerModel.wrong("Amarela"),
  AnswerModel.wrong("Branca"),
  AnswerModel.right("Azul"),
]);

const BASE_URL = "http://localhost:3000/api";

function Home() {
  const [questionsIds, setQuestionsIds] = useState<number[]>([]);
  const [question, setQuestion] = useState<QuestModel>();
  const [totalHits, setTotalHits] = useState(0);

  const fetchQuestionsIds = async () => {
    const response = await fetch(`${BASE_URL}/list-of-quests`);
    const questionsIds = await response.json();
    setQuestionsIds(questionsIds);
  };

  const fetchTargetQuestion = async (id: number) => {
    const response = await fetch(`${BASE_URL}/quest/${id}`);

    if (response.status !== 200) return;

    const JSON = await response.json();

    setQuestion(QuestModel.jsonToObjectModel(JSON));
  };

  useEffect(() => {
    fetchQuestionsIds();
  }, []);

  useEffect(() => {
    fetchTargetQuestion(questionsIds[0]);
  }, [questionsIds]);

  const questionFinished = (question: QuestModel) => {
    setQuestion(question);
    question.getIsRight && setTotalHits(totalHits + 1);
  };

  if (!question) return null;

  return (
    <Questionnaire
      question={question}
      finish
      nextStep={() => {}}
      questionFinished={questionFinished}
    />
  );
}

export default Home;
