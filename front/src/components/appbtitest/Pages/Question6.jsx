import React, { useState } from "react";
import { useNavigate } from "react-router";
import QuestionLists from "../Components/QuestionLists";
import AnswerLists from "../Components/AnswerLists";

function Question1({ answers, setAnswers }) {
  const navigate = useNavigate();
  const [testResult, setTestResult] = useState([]);
  const i = 5;

  const SaveAnswers = (e) => {
    if (e.value === "a1") answers.push(AnswerLists[0].value);
    else if (e.value === "a2") answers.push(AnswerLists[1].value);
    console.log(answers);
    // setAnswers((prev) => [...prev], answers);
    navigate(`/AppbtiTest/7`);
  };

  return (
    <article className="area">
      <p>{QuestionLists[i].q1}</p>
      <button id="a1" type="button" value="a1" onClick={(e) => SaveAnswers("a1", e.value)}>
        {QuestionLists[i].a1}
      </button>
      <button id="a2" type="button" value="a2" onClick={(e) => SaveAnswers("a2", e.value)}>
        {QuestionLists[i].a2}
      </button>
    </article>
  );
}
export default Question1;
