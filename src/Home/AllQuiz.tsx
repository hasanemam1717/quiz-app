import { Card } from "../components/ui/card";
import { useGetAllQuizQuery } from "../Redux/api/quizApi";
import { QuizData, setQuiz, TQuiz } from "../Redux/fetures/quiz/quizSlice";
import { useAppDispatch } from "../Redux/hook";

const AllQuiz = () => {
  const { data, isLoading } = useGetAllQuizQuery(undefined);
  const disPatch = useAppDispatch();
  if (isLoading) {
    return <p>Loading</p>;
  }
  const handleSetQuiz = (data: QuizData[]) => {
    disPatch(setQuiz(data));
  };
  return (
    <div>
      <h1>This is All quiz page</h1>
      <div className="grid grid-cols-1  sm:w-full lg:grid-cols-4 gap-5">
        {data.map((quiz: TQuiz, index: string) => (
          <Card
            onClick={() => handleSetQuiz(quiz.questions)}
            className="cursor-pointer p-4 hover:shadow-lg "
            key={index}
          >
            <h1>Name:{quiz.description}</h1>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllQuiz;
