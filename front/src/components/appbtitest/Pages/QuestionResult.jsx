import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { get, post } from "../../../api";
import styled from "styled-components";

function AppbtiTest() {
  const navigate = useNavigate();
  const [isFetchCompleted, setIsFetchCompleted] = useState(false);
  const [finalAnswer, setFinalAnswer] = useState([]);
  const { state } = useLocation();
  const CompleteAnswer = state.join("");

  useEffect(() => {
    async function loadAnswerResult() {
      await post(`appbti`, {
        answers: CompleteAnswer,
      });
      const res = await get(`appbti`);
      setFinalAnswer(res.data.result);
      setIsFetchCompleted(true);
    }
    loadAnswerResult();
  }, []);

  // * * Skeleton Code 작성할 것
  if (!isFetchCompleted) {
    return "Loading...";
  }

  return (
    <AnswerCardContainer>
      <FinalAnswer>당신에게 추천 드리는 앱은!</FinalAnswer>
      {finalAnswer.map((fa) => (
        <AnswerCard key={fa.index}>{fa}</AnswerCard>
      ))}
    </AnswerCardContainer>
  );
}
export default AppbtiTest;

const FinalAnswer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5vh;
  font-size: 2.5em;
  color: white;
`;

const AnswerCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #484bcc;
`;

const AnswerCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  padding: 2vh;
  margin: 5vh;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 10px #e4e4e4;
  word-break: keep-all;
  text-align: center;
`;
