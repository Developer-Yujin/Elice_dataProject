// import React, { useState, useRef, useContext } from "react";
// import { useNavigate } from "react-router";
// import QuestionLists from "../Components/QuestionLists";
// import Question1Context from "./Question1";

// function Question2() {
//   const navigate = useNavigate();
//   const answerRef = useRef();
//   const { q1answer } = useContext(Question1Context);
//   const i = 1;

//   const SavingAnswers = () => {
//     const answer = { key: answerRef.current.value };
//     const q2answer = q1answer.concat(answer);
//     console.log(q2answer);
//     answerRef.current += 1;
//     navigate(`/AppbtiTest/3`);
//   };

//   return (
//     <article className="area">
//       <p>{QuestionLists[i].q1}</p>
//       <button id="a1" type="button" value="b1" ref={answerRef} onClick={SavingAnswers}>
//         {QuestionLists[i].a1}
//       </button>
//       <button id="a2" type="button" value="b2" ref={answerRef} onClick={SavingAnswers}>
//         {QuestionLists[i].a2}
//       </button>
//     </article>
//   );
// }
// export default Question2;

import React, { useRef } from "react";
import { useNavigate } from "react-router";
import QuestionLists from "../Components/QuestionLists";
import AnswerLists from "../Components/AnswerLists";

function Question1() {
  const navigate = useNavigate();
  const answerRef = useRef(1);
  const i = 1;

  const SavingAnswers = (e) => {
    // if (e.value === "a1") answers.push(AnswerLists[0].value);
    // else if (e.value === "a2") answers.push(AnswerLists[1].value);
    // console.log(answers);
    // setAnswers((prev) => [...prev], answers);
    navigate(`/AppbtiTest/3`);
  };

  return (
    <article className="area">
      <p>{QuestionLists[i].q1}</p>
      <button id="a1" type="button" value="b1" ref={answerRef} onClick={SavingAnswers}>
        {QuestionLists[i].a1}
      </button>
      <button id="a2" type="button" value="b2" ref={answerRef} onClick={SavingAnswers}>
        {QuestionLists[i].a2}
      </button>
    </article>
  );
}
export default Question1;
