import React from "react";
import { useNavigate, useLocation } from "react-router";
import QuestionLists from "../Components/QuestionLists";
import { QuestionContainer, Progressbar, Progress, QuestionBox, Button } from "../Components/QuestionSCSS";

function Question2() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const i = 1;

  const SavingAnswers = (e) => {
    const answer = e;
    const q2answer = state.concat(answer);
    navigate(`/AppbtiTest/3`, { state: q2answer });
  };

  return (
    <QuestionContainer>
      <Progressbar>
        <Progress Gage={16.6 * (i + 1)} />
      </Progressbar>
      <QuestionBox>{QuestionLists[i].q1}</QuestionBox>
      <Button id="a1" type="button" value="b1" onClick={() => SavingAnswers("b1")}>
        {QuestionLists[i].a1}
      </Button>
      <Button id="a2" type="button" value="b2" onClick={() => SavingAnswers("b2")}>
        {QuestionLists[i].a2}
      </Button>
    </QuestionContainer>
  );
}
export default Question2;
