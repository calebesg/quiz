import type { NextApiRequest, NextApiResponse } from "next";
import quests from "../dbquests";

function getById(req: NextApiRequest, res: NextApiResponse) {
  const id = +req?.query.id;

  const quest = quests.find((quest) => quest.getId === id);

  if (!quest) return res.status(204).send(null);

  return res.status(200).json(quest.randomizedAnswers());
}

export default getById;
