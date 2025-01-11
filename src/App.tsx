import AllQuiz from "./Home/AllQuiz";
import QuizSummary from "./Home/QuizSummary";
import Qustion from "./Home/Qustion";
import { useAppSelector } from "./Redux/hook";

function App() {
  const { quizComplete } = useAppSelector((state) => state.quiz);
  return (
    <>
      <div className="lg:container mx-auto">
        <div className="">
          <div className="my-2">
            <h1 className="lg:text-5xl text-2xl font-semibold text-center text-orange-600">
              Youth Foundation, Gaibandha
            </h1>
            <p className="text-xl text-center">Monthly Exam Quiz Website</p>
          </div>

          <div>
            <AllQuiz></AllQuiz>
            {!quizComplete ? <Qustion></Qustion> : <QuizSummary></QuizSummary>}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
