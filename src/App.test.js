import { render, screen, waitFor } from '@testing-library/react';
import Quiz from './components/Quiz';
import { QuizProvider } from './contexts/quiz';

const mockQuizData = {
  results: [
    {
      category: "Entertainment: Music",
      type: "multiple",
      difficulty: "easy",
      question: "Who composed the Four Seasons?",
      correct_answer: "Antonio Vivaldi",
      incorrect_answers: ["Johann Sebastian Bach", "Wolfgang Amadeus Mozart", "Joseph Haydn"]
    }
  ]
};

beforeEach(() => {
  // Mock the fetch call
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockQuizData)
    })
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

test('renders next question button when quiz has questions', async () => {
  render(
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  );

  const nextButton = await screen.findByText(/next question/i);
  expect(nextButton).toBeInTheDocument();
});
