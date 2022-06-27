import { AnswerModel } from "./answer";

export class QuestModel {
  constructor(
    private id: number,
    private quest: string,
    private answers: AnswerModel[],
    private isRight = false
  ) {}

  get getId() {
    return this.id;
  }

  get getQuest() {
    return this.quest;
  }

  get getAnswers() {
    return this.answers;
  }

  get getIsRight() {
    return this.isRight;
  }

  get answered() {
    return this.answers.find((answer) => answer.getReveled) ? true : false;
  }
}
