import { AnswerModel } from "../../models/answer";
import { QuestModel } from "../../models/quest";

const quests: QuestModel[] = [
  new QuestModel(306, "Qual bicho transmite a doeça de chagas?", [
    AnswerModel.wrong("Abelha"),
    AnswerModel.wrong("Barata"),
    AnswerModel.wrong("Pulga"),
    AnswerModel.wrong("Barbeiro"),
  ]),
  new QuestModel(
    202,
    'Qual fruto é conhecido no Norte e Nordeste como "Jerimum"?',
    [
      AnswerModel.wrong("Caju"),
      AnswerModel.wrong("Côco"),
      AnswerModel.wrong("Chuchu"),
      AnswerModel.wrong("Abóbora"),
    ]
  ),
  new QuestModel(203, "Qual é o coletivo de cães?", [
    AnswerModel.wrong("Manada"),
    AnswerModel.wrong("Alcateia"),
    AnswerModel.wrong("Rebanho"),
    AnswerModel.wrong("Matilha"),
  ]),
  new QuestModel(204, "Qual é o triângulo que tem todos os lados diferentes?", [
    AnswerModel.wrong("Equilátero"),
    AnswerModel.wrong("Isóceles"),
    AnswerModel.wrong("Trapézio"),
    AnswerModel.wrong("Escaleno"),
  ]),
];

export default quests;
