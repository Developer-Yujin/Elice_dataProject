import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { get, post } from "../../../api";
import styled from "styled-components";

function AppbtiTest() {
  const [isFetchCompleted, setIsFetchCompleted] = useState(false);
  const [finalAnswer, setFinalAnswer] = useState([]);
  const { state } = useLocation();

  useEffect(() => {
    async function loadAnswerResult() {
      const res = await post(`appbti`, {
        answers: state,
      });
      setFinalAnswer(res.data);
      console.clear();
      console.log(res.data);
      setIsFetchCompleted(true);
    }
    loadAnswerResult();
  }, []);

  // * * Skeleton Code 작성할 것
  if (!isFetchCompleted) {
    return "Loading...";
  }

  const LinkAppstore = (id) => {
    const appid = id.currentTarget;
    window.open(`http://www.play.google.com/store/apps/details?id=${appid}`, "_blank");
  };

  return (
    <AnswerCardContainer>
      <FinalAnswer>당신에게 추천 드리는 앱은!</FinalAnswer>
      {finalAnswer.map((fa) => (
        <AnswerCard key={fa._id}>
          <AppImgBox onClick={() => window.open(`https://play.google.com/store/apps/details?id=${fa.id}`, "_blank")}>
            <img width="100px" src={`${fa.icon}`} alt="앱 아이콘" />
          </AppImgBox>
          <DescriptionBox>
            <AppTitleBox>{fa.name}</AppTitleBox>
            <AppCTGRBox>{fa.category}</AppCTGRBox>
            <AppStarBox>{fa.rating}</AppStarBox>
          </DescriptionBox>
        </AnswerCard>
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
  justify-content: left;
  align-items: center;
  width: 250px;
  height: 150px;
  padding: 1vh;
  margin: 3vh;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 10px #e4e4e4;
  word-break: keep-all;
  text-align: center;
`;

const AppImgBox = styled.div`
  width: 100px;
  height: 100px;
  margin: auto;
  align-items: center;
`;

const DescriptionBox = styled.div`
  width: 130px;
  height: 120px;
  // background-color: grey;
  margin: auto;
`;

const AppTitleBox = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  // background-color: blue;
  margin: 10px 5px 5px 5px;
  width: 120px;
  height: 45px;
  font-weight: 900;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
`;

const AppCTGRBox = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  // background-color: green;
  margin: 5px;
  font-style: italic;
  font-size: 0.8em;
`;

const AppStarBox = styled.div`
  // background-color: black;
  margin: 5px;
`;
