import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const Index = function () {
  const navigate = useNavigate();

  return (
    <Background>
      <MainContainer>
        <PanelText>
          <PanelTitle>
            <p>AppBTI 회원들에게만 제공하는 Editor의 시장 분석</p>
          </PanelTitle>
          <PanelContent>
            <p>캐글의 공신력있는 데이터를 바탕으로</p>
            <p>분석한 데이터들이 오직 회원에게만 제공됩니다.</p>
            <p>상세 정보가 궁금하다면 지금 당장 가입하러 Go!</p>
          </PanelContent>
          <ImgWrapper>
            <ImgBox>
              <img src="https://blog.kakaocdn.net/dn/PQMIb/btrBxaFyAk5/nDhtoZL9iYztBrlMx9jbsK/img.png" alt="data1" width="300px" />
            </ImgBox>
            <ImgBox>
              <img src="https://blog.kakaocdn.net/dn/bJmZ5t/btrBtCwji0n/ELvy6s4cJQyPh1LFzU4PW0/img.png" alt="data2" width="300px" />
            </ImgBox>
            <ImgBox>
              <img src="https://blog.kakaocdn.net/dn/bG8qb8/btrBrru8orM/A0FnJ3qKfdkGFXRw0TXKfk/img.png" alt="data3" width="300px" />
            </ImgBox>
          </ImgWrapper>
          <GoAppbti onClick={() => navigate("/editorspick")}>Editor's Pick 보러가기👉</GoAppbti>
        </PanelText>
      </MainContainer>
      <ScrollButton onClick={() => window.scrollBy({ top: 750, behavior: "smooth" })}>
        <img src="https://blog.kakaocdn.net/dn/8QI8z/btrBuyNOXqU/iktp61W5CxsECbB0qVKQz0/img.png" alt="Scroll button" width="100px" />
      </ScrollButton>
    </Background>
  );
};

export default Index;

const Background = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 850px;
  padding: 50px 0px 0px 0px;
  background: rgb(248, 248, 248);
  background: linear-gradient(180deg, rgba(248, 248, 248, 1) 5%, rgba(163, 165, 227, 1) 39%, rgba(114, 116, 215, 1) 70%);
  align-items: column;
`;

const MainContainer = styled.div`
  display: flex;
  margin: 100px auto;
  width: 150vh;
  height: 550px;
  //   background-color: yellow;
  justify-content: center;
  align-items: center;
`;

const PanelText = styled.div`
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

const ImgWrapper = styled.div`
  display: flex;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
`;
const ImgBox = styled.div`
  display: flex;
  width: 320px;
  margin: 15px;
  padding: 5px;
  background-color: #fff;
  border-radius: 12px;
  border: none;
  box-shadow: 0 3px 5px #e4e4e4;
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

const ScrollButton = styled.div`
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:auto;
  padding: 0px 0px 20px 0px;
  }
`;
