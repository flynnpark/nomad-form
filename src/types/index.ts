const questions = [
  'question1',
  'question2',
  'question3',
  'question4',
  'question5',
  'question6',
] as const;

export type Question = (typeof questions)[number];

export type FormProps = {
  // eslint-disable-next-line unused-imports/no-unused-vars
  [key in Question]: string;
};
