import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { useAppSelector } from "../Redux/hook";

const QuizSummary = () => {
  const { question, userAnswers } = useAppSelector((state) => state.quiz);
  //   //////////////////
  const correctAnswer = question.reduce((count, qua, index) => {
    return qua.correctAnswer === userAnswers[index] ? count + 1 : count;
  }, 0);
  const correctPersentange = parseFloat(
    ((correctAnswer / question.length) * 100).toFixed(2)
  );
  return (
    <div className="flex justify-center">
      <Card className="w-[450px]">
        <CardHeader>Quiz summary</CardHeader>
        <CardContent>
          You got {correctAnswer} out of {question.length}{" "}
          <div>
            <Progress value={correctPersentange}></Progress>
          </div>
          <h1>Correct Answer:{correctAnswer}</h1>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizSummary;
