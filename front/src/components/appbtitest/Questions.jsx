import React, { useState } from "react";
import { useNavigate } from "react-router";
import Question1 from "./Pages/Question1";
import Question2 from "./Pages/Question2";
import Question3 from "./Pages/Question3";
import Question4 from "./Pages/Question4";
import Question5 from "./Pages/Question5";
import Question6 from "./Pages/Question6";
import Question7 from "./Pages/Question7";
import QuestionLists from "./Components/QuestionLists";

function Questions() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState([]);

  // const SaveAnswers = (name, value) => {
  //   setTestResult((prev) => ({ ...prev, [name]: value }));
  // };

  return (
    <main>
      <Question1 answers={answers} setAnswers={setAnswers} />
      <Question2 answers={answers} setAnswers={setAnswers} />
      <Question3 answers={answers} setAnswers={setAnswers} />
      <Question4 answers={answers} setAnswers={setAnswers} />
      <Question5 answers={answers} setAnswers={setAnswers} />
      <Question6 answers={answers} setAnswers={setAnswers} />
      <Question7 answers={answers} setAnswers={setAnswers} />
    </main>
  );
}
export default Questions;
