import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import YearlyGraph from "./IncreasingAppGraph";

const Index = function () {
  const navigate = useNavigate();
  return (
    <>
      <MainContainer>
        <Panel1>
          <Panel1Text>
            <Panel1Title>
              <p>매 해 커져가는 앱 시장! 나도 한 번 도전해 볼까?</p>
            </Panel1Title>
            <Panel1Content>
              <p>앱 개발에 도전해보고 싶은데, 막연하게 뭐부터 시작해야할지 모르겠는 분!</p>
              <p>내 취향의 앱을 찾는 것 부터, 어떤 시장이 가능성이 높은지에 대한 분석과</p>
              <p>앱 개발을 위해 팀원을 찾거나 기존의 프로젝트에 참여하는 것까지!</p>
            </Panel1Content>
            <GoAppbti onClick={() => navigate("/AppbtiTest")}>AppBTI 테스트 해보러 가기👉</GoAppbti>
          </Panel1Text>
          <YearlyGraph />
        </Panel1>
        <ScrollButton onClick={() => window.scrollBy({ top: 650, behavior: "smooth" })}>
          <img src="https://blog.kakaocdn.net/dn/FjVIc/btrBr9Hnh8K/fseBVOSyI7uh9NGTSZBpNK/img.png" alt="Scroll button" width="50px" />
        </ScrollButton>
      </MainContainer>
      <MainContainer2>
        <Panel2 />
        얄dd
        <ScrollButton onClick={() => window.scrollBy({ top: 600, behavior: "smooth" })}>
          <img src="https://blog.kakaocdn.net/dn/FjVIc/btrBr9Hnh8K/fseBVOSyI7uh9NGTSZBpNK/img.png" alt="Scroll button" width="50px" />
        </ScrollButton>
      </MainContainer2>
      <MainContainer3>d</MainContainer3>
    </>
  );
};

export default Index;

const MainContainer = styled.div`
  width: 100%;
  height: 650px;
  //   background-color: red;
`;

const MainContainer2 = styled.div`
  width: 100%;
  height: 650px;
  background: rgb(248, 248, 248);
  background: linear-gradient(180deg, rgba(248, 248, 248, 1) 5%, rgba(163, 165, 227, 1) 39%, rgba(114, 116, 215, 1) 70%);
`;

const MainContainer3 = styled.div`
  width: 100%;
  height: 400px;
  background: #7274d7;
`;

const Panel1 = styled.div`
  display: flex;
  margin: 100px auto;
  width: 150vh;
  height: 550px;
  //   background-color: yellow;
  justify-content: center;
  align-items: center;
`;

const Panel1Text = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  padding: 10px;
  width: 40%;
  //   height: 400px;
  //   background-color: green;
  align-items: column;
  justify-content: center;
`;

const Panel1Title = styled.div`
  display: flex;
  padding: 10px;
  margin: auto;
  color: #484bcc;
  font-size: 1.5em;
  font-weight: 800;
  //   width: 100%;
  //   height: 50px;
  //   background-color: blue;
  justify-content: center;
`;
const Panel1Content = styled.div`
  display: flex;
  padding: 10px;
  margin: auto;
  color: #919191;
  //   width: 100%;
  //   height: 200px;
  //   background-color: grey;
  justify-content: center;
  flex-wrap: wrap;
  align-items: column;
  word-break: keep-all;
`;

const GoAppbti = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 20px;
  padding: 2vh;
  margin: 30px 4vh 0 4vh;
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
  display: flex;
  justify-content: center;
  align-items: center;
  }
`;

const Panel2 = styled.div`
  display: flex;
  margin: 100px auto;
  width: 150vh;
  height: 550px;
  //   background-color: red;
  justify-content: center;
  align-items: center;
`;
