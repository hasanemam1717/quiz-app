import { Button } from "../components/ui/button";
import {
  completeQuiz,
  nextQuestion,
  previousQuestion,
} from "../Redux/fetures/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "../Redux/hook";

const QuizControl = () => {
  const disPatch = useAppDispatch();
  const handleNextQuestion = () => {
    disPatch(nextQuestion());
  };
  const { question, currentQuestionIndex, userAnswers } = useAppSelector(
    (state) => state.quiz
  );
  const isAnswerSelect = userAnswers[currentQuestionIndex] !== null;
  const handlePrevQuestion = () => {
    disPatch(previousQuestion());
  };

  const handleCompleteQuiz = () => {
    disPatch(completeQuiz());
  };

  const isCompleteQuiz =
    isAnswerSelect || currentQuestionIndex !== question.length - 1;
  return (
    <div className="flex justify-between">
      <Button
        disabled={currentQuestionIndex === 0}
        onClick={handlePrevQuestion}
      >
        Previous
      </Button>
      {currentQuestionIndex < question.length - 1 && (
        <Button disabled={!isAnswerSelect} onClick={handleNextQuestion}>
          Next
        </Button>
      )}
      {currentQuestionIndex === question.length - 1 && (
        <Button disabled={!isCompleteQuiz} onClick={handleCompleteQuiz}>
          Complete Quiz
        </Button>
      )}
    </div>
  );
};

export default QuizControl;
