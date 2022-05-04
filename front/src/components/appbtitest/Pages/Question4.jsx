import React from "react";
import { useNavigate, useLocation } from "react-router";
import QuestionLists from "../Components/QuestionLists";

function Question4() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const i = 3;

  const SavingAnswers = (e) => {
    const answer = e;
    const q4answer = state.concat(answer);
    console.log("q4answer", q4answer);
    navigate(`/AppbtiTest/5`, { state: q4answer });
  };

  return (
    <article className="area">
      <p>{QuestionLists[i].q1}</p>
      <button id="a1" type="button" value="d1" onClick={() => SavingAnswers("d1")}>
        {QuestionLists[i].a1}
      </button>
      <button id="a2" type="button" value="d2" onClick={() => SavingAnswers("d2")}>
        {QuestionLists[i].a2}
      </button>
    </article>
  );
}
export default Question4;
