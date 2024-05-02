import { tests } from './tests';

export interface Test {
  id: string;
  label: string;
  questions: Question[];
}

export interface Question {
  id: string;
  label: string;
  choices: Choice[];
  answered?: boolean;
  isCorrectlyAnswered?: boolean;
}

export interface Choice {
  id: string;
  label: string;
  hint?: string;
  correct: boolean;
}

export const getTest = (testId: string) => {
  const test = tests.find((test) => {
    if (test.id === testId) {
      return true;
    }
    return false;
  });
  return test;
};

export const clearAllAnswerFlags = (questions: Question[]) => {
  for (const question of questions) {
    question.answered = false;
  }
};

export const getCorrectChoiceForQuestion = (question: Question) => {
  const correctChoice = question.choices.find((c) => c.correct);
  return correctChoice;
};

export const getQuestionFromChoiceId = (
  choiceId: string,
  questions: Question[]
) => {
  const question = questions.find((q) => {
    return q.choices.find((c) => c.id === choiceId);
  });

  return question;
};
