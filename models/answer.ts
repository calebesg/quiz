export class AnswerModel {
  constructor(
    private value: string,
    private isRight: boolean,
    private reveled: boolean
  ) {}

  get getValue() {
    return this.value;
  }

  get getIsRight() {
    return this.isRight;
  }

  get getReveled() {
    return this.reveled;
  }
}
