import React from "react";
import { useNavigate, useLocation } from "react-router";
import QuestionLists from "../Components/QuestionLists";

function Question5() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const i = 4;

  const SavingAnswers = (e) => {
    const answer = e;
    const q5answer = state.concat(answer);
    console.log("q5answer", q5answer);
    navigate(`/AppbtiTest/6`, { state: q5answer });
  };

  return (
    <article className="area">
      <p>{QuestionLists[i].q1}</p>
      <button id="a1" type="button" value="e1" onClick={() => SavingAnswers("e1")}>
        {QuestionLists[i].a1}
      </button>
      <button id="a2" type="button" value="e2" onClick={() => SavingAnswers("e2")}>
        {QuestionLists[i].a2}
      </button>
    </article>
  );
}
export default Question5;
