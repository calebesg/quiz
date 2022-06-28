export class AnswerModel {
  constructor(
    private value: string,
    private isRight: boolean,
    private reveled: boolean
  ) {}

  static right(value: string) {
    return new AnswerModel(value, true, false);
  }

  static wrong(value: string) {
    return new AnswerModel(value, false, false);
  }

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
