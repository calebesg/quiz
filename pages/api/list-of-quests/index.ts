import type { NextApiRequest, NextApiResponse } from "next";
import quests from "../dbquests";
import { randomize } from "../../../functions/array";

function getAllQuestId(req: NextApiRequest, res: NextApiResponse) {
  const questsId = quests.map((quest) => quest.getId);
  const randomizedQuests = randomize(questsId);

  return res.status(200).json(randomizedQuests);
}

export default getAllQuestId;
