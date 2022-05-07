import React from "react";
import { useNavigate, useLocation } from "react-router";
import QuestionLists from "../Components/QuestionLists";
import { QuestionContainer, Progressbar, Progress, QuestionBox, Button } from "../Components/QuestionSCSS";

function Question3() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const i = 2;

  const SavingAnswers = (e) => {
    const answer = e;
    const q3answer = state.concat(answer);
    navigate(`/AppbtiTest/4`, { state: q3answer });
  };

  return (
    <QuestionContainer>
      <Progressbar>
        <Progress Gage={16.6 * (i + 1)} />
      </Progressbar>
      <QuestionBox>{QuestionLists[i].q1}</QuestionBox>
      <Button id="a1" type="button" value="c1" onClick={() => SavingAnswers("c1")}>
        {QuestionLists[i].a1}
      </Button>
      <Button id="a2" type="button" value="c2" onClick={() => SavingAnswers("c2")}>
        {QuestionLists[i].a2}
      </Button>
    </QuestionContainer>
  );
}
export default Question3;
