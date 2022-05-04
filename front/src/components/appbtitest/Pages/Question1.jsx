import React, { useState, createContext } from "react";
import { useNavigate } from "react-router";
import QuestionLists from "../Components/QuestionLists";

export const Question1Context = createContext();

function Question1() {
  const navigate = useNavigate();
  const i = 0;
  const [answers, setAnswers] = useState([]);

  // const SaveAnswers = (name, value) => {
  //   setAnswers((prev) => ({ ...prev, [name]: value }));
  // };

  const SavingAnswers = (e) => {
    const answer = e;
    const q1answer = answers.concat(answer);
    console.log("answers", answers);
    console.log("q1answer", q1answer);
    // * 구조 분해 할당 배열에 객체 추가
    // setAnswers((prev) => [...prev, answer]);
    console.log("answers:", answers);
    navigate(`/AppbtiTest/2`, { state: q1answer });
  };

  // const SaveAnswers = (e) => {
  //   console.log(testResult);
  //   if (e.value === "a1") testResult.push(AnswerLists[0].value);
  //   else if (e.value === "a2") testResult.push(AnswerLists[1].value);
  //   console.log(testResult);
  //   setAnswers((prev) => [...prev], answers);
  //   navigate(`/AppbtiTest/2`);
  // };

  return (
    <article className="area">
      <p>{QuestionLists[i].q1}</p>
      <button id="a1" type="button" value="a1" onClick={() => SavingAnswers("a1")}>
        {QuestionLists[i].a1}
      </button>
      <button id="a2" type="button" value="a2" onClick={() => SavingAnswers("a2")}>
        {QuestionLists[i].a2}
      </button>
    </article>
  );
}
export default Question1;
