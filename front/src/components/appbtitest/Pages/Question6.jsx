import React from "react";
import { useNavigate, useLocation } from "react-router";
import QuestionLists from "../Components/QuestionLists";
import { QuestionContainer, Progressbar, Progress, QuestionBox, Button } from "../Components/QuestionSCSS";

function Question6() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const i = 5;

  const SavingAnswers = (e) => {
    const answer = e;
    const q6answer = state.concat(answer);
    navigate(`/AppbtiTest/Result`, { state: q6answer });
  };

  return (
    <QuestionContainer>
      <Progressbar>
        <Progress Gage={16.6 * (i + 1)} />
      </Progressbar>
      <QuestionBox>{QuestionLists[i].q1}</QuestionBox>
      <Button id="a1" type="button" value="f1" onClick={() => SavingAnswers("f1")}>
        {QuestionLists[i].a1}
      </Button>
      <Button id="a2" type="button" value="f2" onClick={() => SavingAnswers("f2")}>
        {QuestionLists[i].a2}
      </Button>
    </QuestionContainer>
  );
}
export default Question6;
