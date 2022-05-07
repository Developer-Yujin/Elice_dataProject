import React, { useState } from "react";
import styled from "styled-components";
import ReactApexChart from "react-apexcharts";

// 카테고리별 앱 중에서 3점대 이하인 앱의 비율 Rank 10
const appYearsData = {
  series: [
    {
      data: [4641, 14359, 25743, 42474, 71811, 115430, 167104, 259672, 334541, 480619, 544803],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "bar",
    },
    colors: ["#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#20c997", "#51cf66", "#94d82d", "#ffe066"],
    plotOptions: {
      bar: {
        columnWidth: "50%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
    },
  },
};

const Article1 = function ({ openModalHandler }) {
  const [isOpen, setIsOpen] = useState(false); //isOpen 상태를 만들어준다.
  // const [articleName, setArticleName] = useState("");

  const handleClickModal = (e) => {
    setIsOpen(!isOpen);
  };
  return (
    <ArticleContainer>
      <ArticleBox>
        <PrevGraph>
          <ReactApexChart options={appYearsData.options} series={appYearsData.series} type="bar" height={300} width={500} />
          <p> - 구글 플레이 스토어 연도별 출시 어플 수 - </p>
        </PrevGraph>
        <Content>
          <ContentTitle>
            Google Play 스토어
            <br />
            출시 어플 50만개 돌파!
          </ContentTitle>
          <ContentSummary>매해 커져가는 앱 시장! 나도 한 번 만들어 볼 수 있지 않을까?</ContentSummary>
          <Button onClick={handleClickModal}>
            <p>Appbti Test👉</p>
          </Button>
        </Content>
      </ArticleBox>
    </ArticleContainer>
  );
};

export default Article1;

const ArticleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  position: relative;
`;

const ArticleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 1100px;
  height: 400px;
  margin: 50px 0;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 7px 10px #e4e4e4;
`;

const PrevGraph = styled.div`
  width: 500px;
  height: 300px;
  margin: 0 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .apexcharts-toolbar {
    display: none !important;
  }

  p {
    top: 410px;
    font-size: 11px;
    color: #707070;
  }
`;

const Content = styled.div`
  width: 400px;
  height: auto;
  margin: 0 30px;
`;

const ContentTitle = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;

const ContentSummary = styled.div`
  margin-bottom: 30px;
  font-size: 14px;
  color: #707070;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 130px;
  height: 34px;
  border: 1.5px solid var(--primary);
  border-radius: 10px;
  margin-left: auto;
  cursor: pointer;

  font-size: 13px;
  color: var(--primary);

  transition: all 0.8s ease;

  &:hover {
    color: #fff;
    background-color: var(--primary);
  }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

export const ModalBtn = styled.button`
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const ModalView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: white;
  width: 1000px;
  height: 600px;
  border-radius: 1rem;
  position: relative;
  z-index: 10;
`;
