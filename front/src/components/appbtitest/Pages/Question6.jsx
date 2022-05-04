import React from "react";
import { useNavigate, useLocation } from "react-router";
import QuestionLists from "../Components/QuestionLists";

function Question6() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const i = 5;

  const SavingAnswers = (e) => {
    const answer = e;
    const q6answer = state.concat(answer);
    console.log("q6answer", q6answer);
    navigate(`/AppbtiTest/7`, { state: q6answer });
  };

  return (
    <article className="area">
      <p>{QuestionLists[i].q1}</p>
      <button id="a1" type="button" value="f1" onClick={() => SavingAnswers("f1")}>
        {QuestionLists[i].a1}
      </button>
      <button id="a2" type="button" value="f2" onClick={() => SavingAnswers("f2")}>
        {QuestionLists[i].a2}
      </button>
    </article>
  );
}
export default Question6;
