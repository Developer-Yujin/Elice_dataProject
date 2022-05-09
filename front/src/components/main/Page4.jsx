import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

const Page = function () {
  const navigate = useNavigate();
  return (
    <Background>
      <MainContainer>
        <GraphBox>
          <img src="https://blog.kakaocdn.net/dn/Wopdt/btrBwtdXbED/9nlD6gd1VZ7CZcWSEUSmnk/img.png" alt="Teamwork" width="400px" />
          <PanelText>
            <PanelTitle>
              <p>협업하고 싶은 사람 여기여기 모여라🙋‍♀️</p>
            </PanelTitle>
            <PanelContent>
              <p>AppBTI에서는 앱 개발을 희망하는 개발자들을 위한 커뮤니티가 회원제로 제공됩니다.</p>
              <p>거기 너! 내 동료가 되어라!</p>
              <p>앱 개발 프로젝트를 위한 동료를 만들러 지금 당장 떠나볼까요?</p>
              <p>상세 정보가 궁금하다면 지금 당장 가입하러 Go!</p>
            </PanelContent>
          </PanelText>
        </GraphBox>
        <GoAppbti onClick={() => navigate("community/recruits")}>커뮤니티 구경 가기👉</GoAppbti>
      </MainContainer>
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
  background-color: #7274d7;
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
  // background-color: #fff;
  // border-radius: 12px;
  // border: none;
  // box-shadow: 0 3px 5px #e4e4e4;
  word-break: keep-all;
`;

const GraphBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: row;
  // background-color: yellow;
  width: 100%;
  justify-content: center;
  align-items: center;
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
  color: #fff;
  border: 2px solid #484bcc;
  background-color: #484bcc;
  &:hover {
    background: #fff;
    color: #484bcc;
    transition: 0.3s;
  }
  border-radius: 15px;
  word-break: keep-all;
  text-align: center;
`;

const PanelText = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  padding: 10px;
  width: 50%;
  align-items: column;
  justify-content: center;
`;

const PanelTitle = styled.div`
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
const PanelContent = styled.div`
  display: flex;
  padding: 10px;
  margin: auto;
  color: white;
  //   width: 100%;
  //   height: 200px;
  //   background-color: grey;
  justify-content: center;
  flex-wrap: wrap;
  align-items: column;
  word-break: keep-all;
`;
