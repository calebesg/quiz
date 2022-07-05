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

  revelAnswer(): AnswerModel {
    return new AnswerModel(this.getValue, this.getIsRight, true);
  }

  static jsonToObjectModel(obj: AnswerModel): AnswerModel {
    return new AnswerModel(obj.value, obj.isRight, obj.reveled);
  }
}
