import React, { useState } from "react";
import { useNavigate } from "react-router";
import QuestionLists from "../Components/QuestionLists";
import { QuestionContainer, Progressbar, Progress1, QuestionBox, Button } from "../Components/QuestionSCSS";

function Question1() {
  const navigate = useNavigate();
  const i = 0;
  const [answers, setAnswers] = useState([]);

  const SavingAnswers = (e) => {
    const answer = e;
    const q1answer = answers.concat(answer);
    navigate(`/AppbtiTest/2`, { state: q1answer });
  };

  return (
    <QuestionContainer>
      <Progressbar>
        <Progress1 />
      </Progressbar>
      <QuestionBox>{QuestionLists[i].q1}</QuestionBox>
      <Button id="a1" type="button" value="a1" onClick={() => SavingAnswers("a1")}>
        {QuestionLists[i].a1}
      </Button>
      <Button id="a2" type="button" value="a2" onClick={() => SavingAnswers("a2")}>
        {QuestionLists[i].a2}
      </Button>
    </QuestionContainer>
  );
}
export default Question1;
