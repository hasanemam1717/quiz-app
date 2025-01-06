import { Button } from "../components/ui/button";
import {
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
        <Button>Complete Quiz</Button>
      )}
    </div>
  );
};

export default QuizControl;
