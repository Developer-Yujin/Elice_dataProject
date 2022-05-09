import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import YearlyGraph from "./IncreasingAppGraph";

const Page = function () {
  const navigate = useNavigate();
  return (
    <Background>
      <MainContainer>
        <GraphBox>
          <YearlyGraph />
          <img src="https://blog.kakaocdn.net/dn/HakTv/btrByndrqpi/7dmLGD0O1H4kMXc8ESPzxK/img.png" alt="앱 시장 증가" width="500px" />
        </GraphBox>
        <TextAd>
          요새 다들 앱 개발에 도전해본다던데...시장도 계속 커지고 있다고🤔?
          <br />
          그럼... 나도 한번 도전해볼까😏?
        </TextAd>
        <GoAppbti onClick={() => navigate("/AppbtiTest")}>AppBTI 테스트 해보러 가기👉</GoAppbti>
      </MainContainer>
      <ScrollButton onClick={() => window.scrollBy({ top: 900, behavior: "smooth" })}>
        <img src="https://blog.kakaocdn.net/dn/8QI8z/btrBuyNOXqU/iktp61W5CxsECbB0qVKQz0/img.png" alt="Scroll button" width="100px" />
      </ScrollButton>
    </Background>
  );
};

export default Page;

const Background = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 95vh;
  background-color: #484bcc;
`;

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 80px auto;
  padding: 20px;
  align-items: column;
  padding: 10px;
  width: 140vh;
  height: 650px;
  justify-content: center;
  //   align-items: center;
  background-color: #fff;
  border-radius: 12px;
  border: none;
  box-shadow: 0 3px 5px #e4e4e4;
  word-break: keep-all;
`;

const GraphBox = styled.div`
  display: flex;
  // flex-wrap: wrap;
  align-items: row;
  //   background-color: yellow;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`;

const TextAd = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
  flex-wrap: wrap;
  color: #484bcc;
  justify-content: center;
  //   background-color: red;
  font-size: 2em;
  font-weight: 800;
  text-align: center;
`;

const GoAppbti = styled.button`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 200px;
  height: 20px;
  padding: 2vh;
  margin: 20px 2vh 0px 2vh;
  color: #484bcc;
  border: 2px solid #484bcc;
  background-color: #fff;
  &:hover {
    background: #484bcc;
    color: white;
    transition: 0.3s;
  }
  border-radius: 15px;
  box-shadow: 0 2px 3px #e4e4e4;
  word-break: keep-all;
  text-align: center;
`;

const ScrollButton = styled.div`
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:auto;
  padding: 0px 0px 20px 0px;
  }
`;
