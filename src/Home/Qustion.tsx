import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../components/ui/card";
import { setAnswer } from "../Redux/fetures/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "../Redux/hook";
import QuizControl from "./QuizControl";

const Qustion = () => {
  const disPatch = useAppDispatch();
  const { question, currentQuestionIndex, userAnswers } = useAppSelector(
    (state) => state.quiz
  );
  const currentQuestion = question[currentQuestionIndex];
  const currentAnswer = userAnswers[currentQuestionIndex];
  const handleAnswerChange = (answer: string) => {
    disPatch(setAnswer({ questionIndex: currentQuestionIndex, answer }));
  };
  return (
    <div>
      {question.length > 0 && (
        <Card className="w-[450px] mx-auto p-2">
          <CardTitle className="text-xl ">{currentQuestion.question}</CardTitle>
          <CardDescription>
            Question: {currentQuestionIndex + 1} of {question.length}
          </CardDescription>
          <CardContent className="space-y-2">
            {currentQuestion.options.map((option, index) => (
              <Button
                onClick={() => handleAnswerChange(option)}
                size={"lg"}
                className="w-full"
                key={index}
                variant={option === currentAnswer ? "default" : "outline"}
              >
                {option}{" "}
              </Button>
            ))}
          </CardContent>
          <QuizControl></QuizControl>
        </Card>
      )}
    </div>
  );
};

export default Qustion;
