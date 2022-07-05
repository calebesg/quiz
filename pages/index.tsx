import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Questionnaire from "../components/Questionnaire";
import { QuestModel } from "../models/quest";

const BASE_URL = process.env.API_URL;

function Home() {
  const router = useRouter();

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

  const answerQuestionnaire = (question: QuestModel) => {
    setQuestion(question);
    question.getIsRight && setTotalHits(totalHits + 1);
  };

  const nextQuestionId = () => {
    if (!question) return;

    const nextIndex = questionsIds.indexOf(question.getId) + 1;
    return questionsIds[nextIndex];
  };

  const nextStep = () => {
    const nextId = nextQuestionId();
    nextId ? nextQuestion(nextId) : finish();
  };

  const nextQuestion = (id: number) => {
    fetchTargetQuestion(id);
  };

  const finish = () =>
    router.push({
      pathname: "/result",
      query: { total: questionsIds.length, score: totalHits },
    });

  if (!question) return null;

  return (
    <Questionnaire
      question={question}
      finish={nextQuestionId() === undefined}
      nextStep={nextStep}
      answerQuestionnaire={answerQuestionnaire}
    />
  );
}

export default Home;
