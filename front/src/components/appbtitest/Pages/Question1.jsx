import React, { useState, useRef, createContext } from "react";
import { useNavigate } from "react-router";
import QuestionLists from "../Components/QuestionLists";

export const Question1Context = createContext();

function Question1() {
  const navigate = useNavigate();
  const answerRef = useRef(0);
  const i = 0;
  const [answers, setAnswers] = useState([]);

  // const SaveAnswers = (name, value) => {
  //   setAnswers((prev) => ({ ...prev, [name]: value }));
  // };

  const SavingAnswers = () => {
    const answer = { key: answerRef.current.value };
    const q1answer = answers.concat(answer);
    console.log("answer", answer);
    console.log("q1answer", q1answer);
    // * 구조 분해 할당 배열에 객체 추가
    // setAnswers([...answers, answer]);
    console.log(answers);
    answerRef.current += 1;
    navigate(`/AppbtiTest/2`);
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
      <button id="a1" type="button" value="a1" ref={answerRef} onClick={SavingAnswers}>
        {QuestionLists[i].a1}
      </button>
      <button id="a2" type="button" value="a2" ref={answerRef} onClick={SavingAnswers}>
        {QuestionLists[i].a2}
      </button>
    </article>
  );
}
export default Question1;
