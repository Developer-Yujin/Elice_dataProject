import React, { useState } from "react";
import styled from "styled-components";
import ReactApexChart from "react-apexcharts";

//파이차트
const pieData = {
  series: [102400987977, 88228245083],
  options: {
    labels: ["Google Apps", "Others"],
    fill: {
      colors: ["#9775fa", "#91a7ff"],
    },
    chart: {
      width: 380,
      type: "pie",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    title: {
      text: "인앱 광고 없는 어플 내 다운로드 퍼센트",
      align: "center",
    },
  },
};

// 아티클3 메인
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

// 아티클3 전체 비교
const adsupportedallData = {
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
      categories: ["True", "False"],
    },
  },
};

// 아티클3 구글 빼고
const adsupportedgoogleData = {
  series: [
    {
      name: "Installs",
      data: [
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
      categories: ["True", "False"],
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
            하지만 구글 기본 앱을 제외하고 보았을때, 광고 유무에 따른 평균 다운로드 수에는 큰 차이가 없는 것으로 판단됩니다.
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
                  <ReactApexChart options={adsupportedallData.options} series={adsupportedallData.series} type="bar" height={350} width={500} />
                </Graph>
                <ModalBody>
                  앱 내 광고 유무를 기준으로 각각의 평균 다운로드수를 구해본 결과
                  <br />
                  앱 내 광고가 없는 앱의 평균 다운로드수가 약 100만회 정도 더 높았습니다.
                  <br />
                  <br />
                  광고가 없는 앱이 사용자의 선택을 더 많이 받는다는 가설을 세우고
                  <br />
                  인앱 광고가 없는 어플들을 다운로드 순으로 살펴 본 결과
                  <br />
                  Google Play services, Google Text-to-Speech, Hangouts, Android System WebView등
                  <br />
                  핸드폰에 기본으로 다운 받아져 있는 구글 어플들이 상당수를 차지하고 있음을 확인한였습니다.
                  <br />
                </ModalBody>
                <Graph id="chart">
                  <ReactApexChart options={pieData.options} series={pieData.series} type="pie" width={380} />
                </Graph>
                <ModalBody>
                  구글 어플들의 전체 다운로드 수를 합산 해보니 약1000억에 해당하는 결과가 나왔습다.
                  <br />
                  이는 광고 없는 어플들의 전체 다운로드 수인 약 1900억회 중 대략 53퍼센트에 해당하는 횟수입니다.
                  <br />
                  <br />
                  이를 통해 인앱 광고 유무와 사용자의 앱 다운로드 선택의 상관 관계를 밝혀내기 위해서는
                  <br />
                  핸드폰에 기본적으로 설치되는 구글 앱들을 제외한 후 평균 다운로드 수를 비교해보아야 한다고 판단하였습니다.
                </ModalBody>
                <Graph id="chart">
                  <ReactApexChart options={adsupportedgoogleData.options} series={adsupportedgoogleData.series} type="bar" height={350} width={500} />
                </Graph>
                <ModalBody>
                  핸드폰에 기본적으로 설치된 구글 앱들을 제외하고 평균 다운로드 수를 비교해본 결과
                  <br />
                  위 그래프와 같이 인앱 광고 유무를 기준으로 평균 다운로드 수는 큰 차이를 보이지 않았습니다.
                  <br />
                  따라서 앱내 광고 유무가 사용자의 앱 설치 선택에 유의미한 영향을 끼치지 않는다는 결론을 낼 수 있었습니다.
                  <br />
                </ModalBody>
                <ModalComment>
                  <div>
                    앞서 확인한 바와 같이, 사용자들은 앱내 광고에 민감하지 않으니
                    <br />
                  </div>
                  <div id="comment">
                    <br />
                    광고를 삽입하여 높은 수익을 창출하는 방향으로 앱을 기획해보면 어떨까요?
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
