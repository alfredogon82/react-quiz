export const shuffleAnswers = (questionObj) => {
  if (!questionObj || !questionObj.correctAnswer || !questionObj.incorrectAnswers) {
    return [];
  }

  const answers = [
    questionObj.correctAnswer,
    ...questionObj.incorrectAnswers
  ];

  return answers.sort(() => Math.random() - 0.5);
};

export const normalizeQuestions = (backendQuestions = []) => {
  return backendQuestions.map((backendQuestion) => {
    const incorrectAnswers = (backendQuestion.incorrect_answers || []).map(
      (incorrectAnswer) => decodeURIComponent(incorrectAnswer)
    );

    return {
      correctAnswer: decodeURIComponent(backendQuestion.correct_answer || ''),
      question: decodeURIComponent(backendQuestion.question || ''),
      incorrectAnswers,
    };
  });
};
  
  