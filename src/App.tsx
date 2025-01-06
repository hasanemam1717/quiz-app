import Qustion from "./Home/Qustion";
import { useAppSelector } from "./Redux/hook";

function App() {
  const { question } = useAppSelector((state) => state.quiz);
  console.log(question);
  return (
    <>
      <div className="flex justify-center my-11">
        <div>
          <h1 className="text-9xl">This is a quiz app</h1>
          <Qustion></Qustion>
        </div>
      </div>
    </>
  );
}

export default App;
