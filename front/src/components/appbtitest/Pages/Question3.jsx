import React from "react";
import { useNavigate, useLocation } from "react-router";
import QuestionLists from "../Components/QuestionLists";

function Question3() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const i = 2;

  const SavingAnswers = (e) => {
    const answer = e;
    const q3answer = state.concat(answer);
    console.log("q2answer", q3answer);
    navigate(`/AppbtiTest/4`, { state: q3answer });
  };

  return (
    <article className="area">
      <p>{QuestionLists[i].q1}</p>
      <button id="a1" type="button" value="c1" onClick={() => SavingAnswers("c1")}>
        {QuestionLists[i].a1}
      </button>
      <button id="a2" type="button" value="c2" onClick={() => SavingAnswers("c2")}>
        {QuestionLists[i].a2}
      </button>
    </article>
  );
}
export default Question3;
