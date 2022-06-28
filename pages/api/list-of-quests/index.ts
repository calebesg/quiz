import type { NextApiRequest, NextApiResponse } from "next";
import quests from "../dbquests";

function getAllQuestId(req: NextApiRequest, res: NextApiResponse) {
  const questsId = quests.map((quest) => quest.getId);
  return res.status(200).json(questsId);
}

export default getAllQuestId;
