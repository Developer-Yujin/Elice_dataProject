import React from "react";
import { useNavigate, useLocation } from "react-router";
import QuestionLists from "../Components/QuestionLists";
import { QuestionContainer, Progressbar, Progress4, QuestionBox, Button } from "../Components/QuestionSCSS";

function Question4() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const i = 3;

  const SavingAnswers = (e) => {
    const answer = e;
    const q4answer = state.concat(answer);
    navigate(`/AppbtiTest/5`, { state: q4answer });
  };

  return (
    <QuestionContainer>
      <Progressbar>
        <Progress4 />
      </Progressbar>
      <QuestionBox>{QuestionLists[i].q1}</QuestionBox>
      <Button id="a1" type="button" value="d1" onClick={() => SavingAnswers("d1")}>
        {QuestionLists[i].a1}
      </Button>
      <Button id="a2" type="button" value="d2" onClick={() => SavingAnswers("d2")}>
        {QuestionLists[i].a2}
      </Button>
    </QuestionContainer>
  );
}
export default Question4;
