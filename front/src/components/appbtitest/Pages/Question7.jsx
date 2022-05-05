import React from "react";
import { useNavigate, useLocation } from "react-router";
import QuestionLists from "../Components/QuestionLists";
import { QuestionContainer, Progressbar, Progress7, QuestionBox, Button } from "../Components/QuestionSCSS";

function Question7() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const i = 6;

  const SavingAnswers = (e) => {
    const answer = e;
    const q7answer = state.concat(answer);
    navigate(`/AppbtiTest/Result`, { state: q7answer });
  };

  return (
    <QuestionContainer>
      <Progressbar>
        <Progress7 />
      </Progressbar>
      <QuestionBox>{QuestionLists[i].q1}</QuestionBox>
      <Button id="a1" type="button" value="g1" onClick={() => SavingAnswers("g1")}>
        {QuestionLists[i].a1}
      </Button>
      <Button id="a2" type="button" value="g2" onClick={() => SavingAnswers("g2")}>
        {QuestionLists[i].a2}
      </Button>
    </QuestionContainer>
  );
}
export default Question7;
