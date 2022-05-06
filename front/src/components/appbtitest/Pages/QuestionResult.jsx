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
    return (
      <center>
        <img src="https://cdn.discordapp.com/attachments/964509729659445289/969298919764934666/aac7e5d8fc1fe7bdcebf8025d862a8687414ad4a.gif" alt="작업중" />
        <span>"열 심 히 작 업 중 이 랍 니 다."</span>
      </center>
    );
  }

  const Star = finalAnswer.rating * 20;

  return (
    <AnswerCardContainer>
      <FinalAnswer>당신에게 추천 드리는 앱은!</FinalAnswer>
      {finalAnswer.map((fa) => (
        <AnswerCard key={fa._id}>
          <AppImgBox>
            <img width="100px" src={`${fa.icon}`} alt="App icon" />
          </AppImgBox>
          <DescriptionBox>
            <AppTitleBox>{fa.name}</AppTitleBox>
            <AppCTGRBox>{fa.category}</AppCTGRBox>
            <AppRatingBox>
              <AppStarBox Star={`${fa.rating}` * 22.65}>
                <img src="https://blog.kakaocdn.net/dn/mm2bG/btrBrt0kx9i/Lra7wbqiY389V7MG6slbNk/img.png" alt="별점" />
              </AppStarBox>
            </AppRatingBox>
            <FooterBox>
              <RatingNumber>{fa.rating}</RatingNumber>
              <GoAppstore onClick={() => window.open(`https://play.google.com/store/apps/details?id=${fa.id}`, "_blank")}>
                Go Store
                <img src="https://blog.kakaocdn.net/dn/NGH2u/btrBr6RaP1a/sNHwzqgWWVkYLAEx96lHxk/img.png" alt="appbti icon" />
              </GoAppstore>
            </FooterBox>
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
  margin: 2px 5px 2px 5px;
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
  margin: 2px 5px 2px 5px;
  font-style: italic;
  font-size: 0.8em;
`;

const AppRatingBox = styled.div`
  background-color: black;
  margin: 5px;
  width: 120px;
  height: 20px;
`;

const AppStarBox = styled.div`
  display: flex;
  height: 20px;
  background-color: yellow;
  width: ${(props) => props.Star}px;
`;

const FooterBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const RatingNumber = styled.div`
  margin: 0px 5px 0px 0px;
  font-weight: 600;
`;
const GoAppstore = styled.button`
  color: white;
  font-weight: 500;
  padding: 1px 4px 1px 4px;
  background-color: #484bcc;
  &:hover {
    background-color: #5355c9;
  }
  border-radius: 5px;
  border: none;
`;
