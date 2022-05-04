import React, { useState } from "react";
import styled from "styled-components";
import ReactApexChart from "react-apexcharts";

// 카테고리별 평점 분포 데이터
const CATEGORY_RATING_DATA = {
  series: [
    {
      name: "Personalization",
      data: [26, 249, 2872, 13086, 42],
    },
    {
      name: "Personalization",
      data: [26, 249, 2872, 13086, 42],
    },
    {
      name: "Travel & Local	",
      data: [80, 586, 2115, 2864, 18],
    },
    {
      name: "Lifestyle",
      data: [142, 920, 3093, 6152, 26],
    },
    {
      name: "Entertainment",
      data: [162, 1703, 8143, 11028, 40],
    },
    {
      name: "Tools",
      data: [276, 2024, 7394, 9962, 30],
    },
    {
      name: "Health & Fitness	",
      data: [150, 788, 2001, 3311, 14],
    },
    {
      name: "Books & Reference	",
      data: [41, 445, 2364, 9246, 42],
    },
    {
      name: "News & Magazines	",
      data: [39, 401, 1635, 2904, 3],
    },
    {
      name: "Finance",
      data: [187, 1122, 3607, 5329, 9],
    },
    {
      name: "Maps & Navigation",
      data: [68, 436, 1331, 1478, 3],
    },
    {
      name: "Game",
      data: [184, 2126, 21127, 30182, 105],
    },
    {
      name: "Productivity",
      data: [97, 651, 2573, 3627, 12],
    },
    {
      name: "Photography",
      data: [64, 519, 3052, 3961, 12],
    },
    {
      name: "Business",
      data: [170, 968, 3109, 3457, 15],
    },
    {
      name: "Music & Audio",
      data: [32, 442, 2973, 10394, 24],
    },
    {
      name: "Shopping",
      data: [70, 541, 2021, 2835, 14],
    },
    {
      name: "Social",
      data: [51, 333, 1621, 2989, 24],
    },
    {
      name: "Video Players & Editors",
      data: [35, 356, 1519, 1592, 7],
    },
    {
      name: "Art & Design",
      data: [24, 175, 836, 1408, 8],
    },
    {
      name: "Dating",
      data: [15, 111, 547, 487, 7],
    },
    {
      name: "Medical",
      data: [27, 247, 849, 1425, 7],
    },
    {
      name: "Education",
      data: [226, 1111, 5286, 14068, 41],
    },
    {
      name: "Communication",
      data: [50, 372, 2177, 3117, 9],
    },
    {
      name: "Weather",
      data: [5, 34, 457, 1231, 28],
    },
    {
      name: "Food & Drink",
      data: [30, 323, 857, 1482, 5],
    },
    {
      name: "House & Home",
      data: [28, 153, 383, 399, 4],
    },
    {
      name: "Auto & Vehicles",
      data: [30, 223, 734, 812, 3],
    },
    {
      name: "Libraries & Demo",
      data: [6, 35, 135, 239, 2],
    },
    {
      name: "Events",
      data: [5, 45, 133, 228, 3],
    },
    {
      name: "Beauty",
      data: [10, 52, 364, 430, 2],
    },
    {
      name: "Comics",
      data: [7, 24, 269, 351, 3],
    },
    {
      name: "Parenting",
      data: [8, 35, 161, 326, 1],
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
    colors: [
      "#EB5353",
      "#F66B0E",
      "#F9D923",
      "#36AE7C",
      "#187498",
      "#001D6E",
      "#AB46D2",
      "#5534A5",
      "#FF6FB5",
      "#55D8C1",
      "#069A8E",
      "#005555",
      "#F8B400",
      "#FF6363",
      "#ED5EDD",
      "#6A5495",
      "#041562",
      "#11468F",
      "#35858B",
      "#F6D860",
      "#DB6B97",
      "#557C55",
      "#F14A16",
      "#516BEB",
      "#EC255A",
      "#9A0680",
      "#7267CB",
      "#533535",
      "#F4A442",
      "#34BE82",
      "#0F00FF",
    ],
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
  },
};

// 카테고리별 앱 중에서 3점대 이하인 앱의 비율 Rank 10
const CATEGORY_GRADE_DATA_RANK_10 = {
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
      labels: {
        style: {
          colors: ["#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#20c997", "#51cf66", "#94d82d", "#ffe066"],
          fontSize: "12px",
        },
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
        <Graph>
          <span>그래프 영역</span>
        </Graph>
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
                  AppBTI 에디터는 Google PlayStore에서
                  <br />
                  사용자 만족도가 평균치보다 낮아 도전해볼만한 시장을 찾기 위해 관련 데이터를 분석해보았습니다.
                </ModalBody>
                <Graph1 id="chart">
                  <ReactApexChart options={CATEGORY_RATING_DATA.options} series={CATEGORY_RATING_DATA.series} type="heatmap" height={2000} />
                </Graph1>
                <ModalBody>
                  위의 그래프는 카테고리별 평균 설치수에 비해 전체 설치수가 많은 상위 3개 서비스의 점유율을 나타냅니다.
                  <br />
                  Entertainment, Music & Audio, Personalization, Books & Reference 카테고리는
                  <br />
                  메인으로 점유하고 있는 어플이 있음을 확인할 수 있습니다.
                </ModalBody>

                <Graph1 id="chart">
                  <ReactApexChart options={CATEGORY_GRADE_DATA_RANK_10.options} series={CATEGORY_GRADE_DATA_RANK_10.series} type="bar" height={350} />
                </Graph1>
                <ModalBody>
                  위의 그래프는 카테고리별 앱 별점이 3점대 이하인 앱 비율이 RANK 10위 안에 드는 카테고리를 나타냅니다.
                  <br />
                  House & Home, Dating, Maps & Navigation, Business, Auto & Vehicles,
                  <br />
                  Video Players & Editors, Beauty, Tools, Travel & Local, Shopping
                  <br />
                  카테고리는 다른 서비스들에 비해 사용자 만족도가 낮은 것을 확인할 수 있습니다.
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

const Graph = styled.div`
  width: 500px;
  height: 300px;
  background-color: #f7f7f7;
  margin: 0 30px;
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

  #comment {
    text-decoration: underline;
  }
`;

const ModalFooter = styled.div`
  font-size: 11px;
  color: #707070;
  margin: 50px 0;
`;

const Graph1 = styled.div``;
