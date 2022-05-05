import React, { useState } from "react";
import styled from "styled-components";
import ReactApexChart from "react-apexcharts";

// 카테고리별 평점 분포 데이터
const categoryRatingData = {
  series: [
    {
      name: "Personalization",
      data: [0.16, 1.53, 17.65, 80.41, 0.26],
    },
    {
      name: "Travel & Local	",
      data: [1.41, 10.35, 37.35, 50.57, 0.32],
    },
    {
      name: "Lifestyle",
      data: [1.37, 8.9, 29.93, 59.54, 0.25],
    },
    {
      name: "Entertainment",
      data: [0.77, 8.08, 38.64, 52.32, 0.19],
    },
    {
      name: "Tools",
      data: [1.4, 10.28, 37.56, 50.6, 0.15],
    },
    {
      name: "Health & Fitness",
      data: [2.39, 12.58, 31.94, 52.86, 0.22],
    },
    {
      name: "Books & Reference",
      data: [0.34, 3.67, 19.48, 76.17, 0.35],
    },
    {
      name: "News & Magazines",
      data: [0.78, 8.05, 32.82, 58.29, 0.06],
    },
    {
      name: "Finance",
      data: [1.82, 10.94, 35.18, 51.97, 0.09],
    },
    {
      name: "Maps & Navigation",
      data: [2.05, 13.15, 40.14, 44.57, 0.09],
    },
    {
      name: "Game",
      data: [0.34, 3.96, 39.33, 56.18, 0.2],
    },
    {
      name: "Productivity",
      data: [1.39, 9.35, 36.97, 52.11, 0.17],
    },
    {
      name: "Photography",
      data: [0.84, 6.82, 40.12, 52.06, 0.16],
    },
    {
      name: "Business",
      data: [2.2, 12.54, 40.28, 44.79, 0.19],
    },
    {
      name: "Music & Audio",
      data: [0.23, 3.19, 21.44, 74.97, 0.17],
    },
    {
      name: "Shopping",
      data: [1.28, 9.87, 36.87, 51.72, 0.26],
    },
    {
      name: "Social",
      data: [1.02, 6.64, 32.3, 59.57, 0.48],
    },
    {
      name: "Video Players & Editors",
      data: [1.0, 10.15, 43.29, 45.37, 0.2],
    },
    {
      name: "Art & Design",
      data: [0.98, 7.14, 34.11, 57.45, 0.33],
    },
    {
      name: "Dating",
      data: [1.29, 9.51, 46.87, 41.73, 0.6],
    },
    {
      name: "Medical",
      data: [1.06, 9.67, 33.23, 55.77, 0.27],
    },
    {
      name: "Education",
      data: [2.78, 13.66, 65.0, 18.05, 0.5],
    },
    {
      name: "Communication",
      data: [0.87, 6.5, 38.03, 54.45, 0.16],
    },
    {
      name: "Weather",
      data: [0.28, 1.94, 26.04, 70.14, 1.6],
    },
    {
      name: "Food & Drink",
      data: [1.11, 11.98, 31.78, 54.95, 0.19],
    },
    {
      name: "House & Home",
      data: [2.9, 15.82, 39.61, 41.26, 0.41],
    },
    {
      name: "Auto & Vehicles",
      data: [1.66, 12.38, 40.73, 45.06, 0.17],
    },
    {
      name: "Libraries & Demo",
      data: [1.44, 8.39, 32.37, 57.31, 0.48],
    },
    {
      name: "Events",
      data: [1.21, 10.87, 32.13, 55.07, 0.72],
    },
    {
      name: "Beauty",
      data: [1.17, 6.06, 42.42, 50.12, 0.23],
    },
    {
      name: "Comics",
      data: [1.07, 3.67, 41.13, 53.67, 0.46],
    },
    {
      name: "Parenting",
      data: [1.51, 6.59, 30.32, 61.39, 0.19],
    },
  ],
  options: {
    chart: {
      height: 450,
      type: "heatmap",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#f03e3e", "#d6336c", "#ae3ec9", "#7048e8", "#4263eb", "#1098ad", "#0ca678", "#74b816", "#ffd43b", "#f76707"],
    xaxis: {
      type: "category",
      categories: ["⭐️", "⭐️⭐️", "⭐️⭐️⭐️", "⭐️⭐️⭐️⭐️", "⭐️⭐️⭐️⭐️⭐️"],
    },
    title: {
      text: "",
    },
    grid: {
      padding: {
        right: 20,
      },
    },
    formatter: function (seriesName, opts) {
      return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + "%";
    },
  },
};

// 카테고리별 앱 중에서 3점대 이하인 앱의 비율 Rank 10
const categoryGradeDataRank10 = {
  series: [
    {
      data: [58.32, 57.67, 55.34, 55.02, 54.78, 54.43, 49.65, 49.24, 49.1, 48.02],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "bar",
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        },
      },
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
      categories: [["House", "& Home"], "Dating", ["Maps &", "Navigation"], "Business", ["Auto &", "Vehicles"], ["Video Players", "& Editors"], "Beauty", "Tools", ["Travel", "& Local"], "Shopping"],
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
          <ReactApexChart options={categoryGradeDataRank10.options} series={categoryGradeDataRank10.series} type="bar" height={300} width={500} />
          <p> - 카테고리별 평점 3점대 이하 앱 비율 RANK10 - </p>
        </PrevGraph>
        <Content>
          <ContentTitle>
            사용자 만족도가 평균치보다 낮아
            <br />
            도전해볼만한 시장
          </ContentTitle>
          <ContentSummary>왼쪽 그래프에 있는 총 10개의 카테고리는 다른 카테고리에 비해 서비스 만족도가 낮은것으로 확인되었습니다.</ContentSummary>
          <Button onClick={handleClickModal}>
            <p>자세히보기 👉</p>
          </Button>
        </Content>
        {isOpen ? (
          <ModalBackdrop onClick={handleClickModal}>
            <ModalView
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <ModalArticle>
                <div className="close-btn" onClick={handleClickModal}>
                  &times;
                </div>
                <ModalTitle>사용자 만족도가 평균치보다 낮아 도전해볼만한 시장</ModalTitle>
                <ModalBody>
                  AppBTI 에디터는 Google PlayStore에서 사용자 만족도가 평균치보다 낮아,
                  <br />
                  도전해볼만한 시장을 찾기 위해 관련 데이터를 분석해보았습니다.
                </ModalBody>
                <Graph id="chart">
                  <ReactApexChart options={categoryRatingData.options} series={categoryRatingData.series} type="heatmap" height={1000} width={700} />
                </Graph>
                <ModalBody>
                  위의 그래프는 카테고리별 앱의 별점 분포 비율을 나타냅니다.
                  <br />
                  그래프에서 색이 진할수록 분포 비율이 높음을 의미합니다.
                  <br />
                  거의 모든 카테고리의 별점 비율이 3~4점대에 머무르는 것을 확인할 수 있습니다.
                  <br />
                  AppBTI는 약 절반 정도의 사용자가 서비스에 만족하지 못한 카테고리는 무엇인지 조사하기 위해
                  <br />
                  추가로 각 카테고리의 앱 별점이 3점대 이하인 비율을 분석했고, 결과는 아래와 같습니다.
                </ModalBody>

                <Graph id="chart">
                  <ReactApexChart options={categoryGradeDataRank10.options} series={categoryGradeDataRank10.series} type="bar" height={350} width={800} />
                </Graph>
                <ModalBody>
                  위의 그래프와 같이 카테고리별 앱 별점이 3점대 이하인 앱 비율이 RANK 10위 안에 드는 카테고리는 아래와 같습니다.
                  <br />
                  House & Home, Dating, Maps & Navigation, Business, Auto & Vehicles,
                  <br />
                  Video Players & Editors, Beauty, Tools, Travel & Local, Shopping
                  <br />이 카테고리는 다른 서비스들에 비해 사용자 만족도가 낮은 것을 확인할 수 있습니다.
                </ModalBody>
                <ModalComment>
                  <div>
                    앞서 확인한 바와 같이, 타 서비스에 비해 사용자 만족도가 낮은
                    <br />
                    House & Home, Dating, Maps & Navigation, Business, Auto & Vehicles,
                    <br />
                    Video Players & Editors, Beauty, Tools, Travel & Local, Shopping
                    <br />
                  </div>
                  <div id="comment">
                    위의 카테고리 내에서 진출해보고 싶은 시장을 정하고, 기존에 출시된 앱들의 실패요인을 분석하여
                    <br />
                    사용자 만족도가 높은 앱을 만들어 보는것은 어떨까요?
                  </div>
                </ModalComment>

                <ModalFooter>Editor's Pick은 Google Playstore의 2021년 6월 데이터를 기준으로 분석한 결과입니다.</ModalFooter>
              </ModalArticle>
            </ModalView>
          </ModalBackdrop>
        ) : null}
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

const ModalArticle = styled.div`
  overflow: scroll;

  /* IE scroll 숨김 */
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
    width: 0 !important;
  }

  .close-btn {
    position: absolute;
    top: 15px;
    right: 20px;
    cursor: pointer;
  }

  .content {
    font-size: 100px;
  }
`;

const ModalTitle = styled.div`
  margin: 100px 0 80px 0;
  font-size: 23px;
  font-weight: bold;
  color: #000;
`;

const ModalBody = styled.div`
  margin: 50px 0;
  font-size: 14px;
  color: #707070;
`;

const ModalComment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 50px;
  width: 800px;
  height: 150px;
  background-color: #f9f9f9;
  font-size: 14px;
  font-style: italic;
  border-radius: 5px;

  #comment {
    text-decoration: underline;
  }
`;

const ModalFooter = styled.div`
  font-size: 11px;
  color: #707070;
  margin: 50px 0;
`;

const Graph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
