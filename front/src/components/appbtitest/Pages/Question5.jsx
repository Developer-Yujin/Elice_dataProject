import React from "react";
import { useNavigate, useLocation } from "react-router";
import QuestionLists from "../Components/QuestionLists";
import { QuestionContainer, Progressbar, Progress, QuestionBox, Button } from "../Components/QuestionSCSS";

function Question5() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const i = 4;

  const SavingAnswers = (e) => {
    const answer = e;
    const q5answer = state.concat(answer);
    navigate(`/AppbtiTest/6`, { state: q5answer });
  };

  return (
    <QuestionContainer>
      <Progressbar>
        <Progress Gage={16.6 * (i + 1)} />
      </Progressbar>
      <QuestionBox>{QuestionLists[i].q1}</QuestionBox>
      <Button id="a1" type="button" value="e1" onClick={() => SavingAnswers("e1")}>
        {QuestionLists[i].a1}
      </Button>
      <Button id="a2" type="button" value="e2" onClick={() => SavingAnswers("e2")}>
        {QuestionLists[i].a2}
      </Button>
    </QuestionContainer>
  );
}
export default Question5;
