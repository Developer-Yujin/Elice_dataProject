import React from "react";
import { useNavigate, useLocation } from "react-router";
import QuestionLists from "../Components/QuestionLists";

function Question7() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const i = 6;

  const SavingAnswers = (e) => {
    const answer = e;
    const q7answer = state.concat(answer);
    console.log("q7answer", q7answer);
    navigate(`/AppbtiTest/Result`, { state: q7answer });
  };

  return (
    <article className="area">
      <p>{QuestionLists[i].q1}</p>
      <button id="a1" type="button" value="g1" onClick={() => SavingAnswers("g1")}>
        {QuestionLists[i].a1}
      </button>
      <button id="a2" type="button" value="g2" onClick={() => SavingAnswers("g2")}>
        {QuestionLists[i].a2}
      </button>
    </article>
  );
}
export default Question7;
