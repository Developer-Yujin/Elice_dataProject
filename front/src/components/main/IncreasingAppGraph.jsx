import React from "react";
import styled from "styled-components";
import ReactApexChart from "react-apexcharts";

const YealyAppdata = {
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

const YealyAppGraph = function () {
  return (
    <PrevGraph>
      <ReactApexChart options={YealyAppdata.options} series={YealyAppdata.series} type="bar" height={300} width={650} />
      <p> - 구글 플레이 스토어 연도별 출시 어플 수 - </p>
    </PrevGraph>
  );
};

export default YealyAppGraph;

const PrevGraph = styled.div`
  width: 700px;
  height: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  word-break: keep-all;
  .apexcharts-toolbar {
    display: none !important;
  }

  p {
    top: 410px;
    font-size: 12px;
    color: #707070;
  }
`;
