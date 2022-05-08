import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { UserStateContext } from "../../App";

import Article1 from "./Article1";
import Article2 from "./Article2";
import Article3 from "./Article3";

const EditorsPick = function () {
  const navigate = useNavigate();
  const userState = useContext(UserStateContext);

  useEffect(() => {
    // 만약 전역 상태의 user가 null이라면, 로그인 페이지로 이동함.
    if (!userState.user) {
      alert("로그인 후 이용가능한 서비스입니다😂");
      navigate("/login");
      return;
    }
  }, [navigate, userState.user]);

  return (
    <ArticleContainer>
      <h1>Editor’s Pick</h1>
      <span>
        Editor's Pick은 Google Playstore의 2021년 6월 데이터를 기준으로
        <br />
        에디터의 시선에서 구글 플레이스토어 시장을 분석하여 인사이트를 제공합니다.
      </span>
      <Article1 />
      <Article2 />
      <Article3 />
    </ArticleContainer>
  );
};

export default EditorsPick;

const ArticleContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;

  h1 {
    margin: 50px 0 20px 0;
    font-size: 30px;
    font-weight: 900;
  }

  span {
    margin: 20px 0;
    text-align: center;
    font-size: 15px;
    font-weight: 400;
    color: #707070;
  }
`;
