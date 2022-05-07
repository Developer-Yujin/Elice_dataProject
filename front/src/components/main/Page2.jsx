import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const Index = function () {
  const navigate = useNavigate();
  return (
    <Background>
      <Panel1>
        <Panel1Text>
          <Panel1Title>
            <p>숨겨왔던 나~의~🎶 취향을 찾아서!</p>
          </Panel1Title>
          <Panel1Content>
            <p>당장 앱 개발에 들어가기 이전에! 먼저 나 자신을 돌아보자!</p>
            <p>내 취향의 앱은 과연 어떤 앱들일까?</p>
            <p>내가 개발할 때 목표로 삼을 만한 앱들은 어떤 게 있을까?</p>
            <p>나도 몰랐던 내 취향이 궁금하다면, 지금 당장</p>
          </Panel1Content>
          <GoAppbti onClick={() => navigate("/AppbtiTest")}>AppBTI 테스트 해보러 가기👉</GoAppbti>
        </Panel1Text>
        <img src="https://blog.kakaocdn.net/dn/4JLyC/btrBsGkMH6c/vr4QcD26aRlK27zd6gIlm0/img.gif" alt="appbti test" />
      </Panel1>
      <ScrollButton onClick={() => window.scrollBy({ top: 700, behavior: "smooth" })}>
        <img src="https://blog.kakaocdn.net/dn/bsXEEr/btrBwuqnjiv/ABlPy1Fn4elvNKIgnmEwl1/img.png" alt="Scroll button" width="100px" />
      </ScrollButton>
    </Background>
  );
};

export default Index;

const Background = styled.div`
  width: 100%;
  height: 600px;
  //   background-color: red;
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
