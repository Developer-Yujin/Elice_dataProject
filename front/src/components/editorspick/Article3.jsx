import React, { useState } from "react";
import styled from "styled-components";
import ReactApexChart from "react-apexcharts";

// 카테고리별 평점 분포 데이터
const adsupportedData = {
  series: [
    {
      name: "Installs",
      data: [
        {
          x: "True",
          y: 1492648,
        },
        {
          x: "False",
          y: 2308279,
        },
        {
          x: "True",
          y: 1303157,
        },
        {
          x: "False",
          y: 1243938,
        },
      ],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 380,
    },
    fill: {
      colors: [
        function (opt) {
          if (opt.w.globals.labels[opt.dataPointIndex] === "True") {
            return "#9775fa";
          } else {
            return "#748ffc";
          }
        },
      ],
    },
    xaxis: {
      type: "category",
      categories: ["True", "False", "True", "False"],
      group: {
        style: {
          fontSize: "12px",
          fontWeight: 700,
        },
        groups: [
          { title: "Adsupported", cols: 2 },
          { title: "Adsupported without Google", cols: 2 },
        ],
      },
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
          <ReactApexChart options={adsupportedData.options} series={adsupportedData.series} type="bar" height={320} width={500} />
          <p> - 앱 내 광고 유무에 따른 평균 다운로드 수 - </p>
        </PrevGraph>
        <Content>
          <ContentTitle>
            앱 내 광고는
            <br />
            사용자의 앱 다운로드에 영향을 미칠까?
          </ContentTitle>
          <ContentSummary>
            광고가 있는 서비스와 없는 서비스의 평균 다운로드 수를 비교한 결과 광고가 없는 서비스의 다운로드 수가 더 높은 것으로 확인됩니다.
            <br />
            하지만 구글 기본 어플을 제외하고 보았을때, 광고 유무에 따른 평균 다운로드 수에는 큰 차이가 없는 것으로 판단됩니다.
          </ContentSummary>
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
                <ModalTitle>앱 내 광고가 사용자의 앱 다운로드에 미치는 영향</ModalTitle>
                <ModalBody>
                  AppBTI 에디터는 Google PlayStore에서
                  <br />
                  앱내 광고가 사용자의 앱 다운로드에 미치는 영향을 알아보기 위해
                  <br />
                  광고 유무에 따른 평균 다운로드 수 데이터를 분석했습니다.
                </ModalBody>
                <Graph id="chart">
                  <ReactApexChart options={adsupportedData.options} series={adsupportedData.series} type="bar" height={350} width={500} />
                </Graph>
                <ModalBody>
                  우선 광고 있는 앱과
                  <br />
                  그래프에서 색이 진할수록 분포 비율이 높음을 의미합니다.
                  <br />
                  거의 모든 카테고리의 별점 비율이 3~4점대에 머무르는 것을 확인할 수 있습니다.
                  <br />
                  AppBTI는 약 절반 정도의 사용자가 서비스에 만족하지 못한 카테고리는 무엇인지 조사하기 위해
                  <br />
                  추가로 각 카테고리의 앱 별점이 3점대 이하인 비율을 분석했고, 결과는 아래와 같습니다.
                </ModalBody>

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

  #SvgjsPath1974 {
    background-color: red !important;
    fill: red !important;
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
