import styled from "styled-components";

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

const H1 = styled.h1`
  margin: 50px 0px 50px 0px;
  font-size: 3em;
  text-align: center;
`;

const A = styled.a`
  text-decoration: none;
  color: #000;
`;

const Div = styled.div`
  display: block;

  width: 100%;
  height: 100%;
`;

const One = styled.article`
  width: 33%;
  height: 500px;
  float: left;
  display: block;

  background-color: #532fa1;
  transition: background-color 0.3s;
  &:hover {
    background-color: #8683bd;
  }
`;

const Two = styled.article`
  width: 33%;
  height: 500px;
  float: left;
  display: block;

  background-color: #a44789;
  transition: background-color 0.3s;
  &:hover {
    background-color: #bf7eac;
  }
`;

const Three = styled.article`
  width: 33%;
  height: 500px;
  float: left;
  display: block;

  background-color: #3ab6bc;
  transition: background-color 0.3s;
  &:hover {
    background-color: #75ccd0;
  }
`;

const Four = styled.article`
  width: 33%;
  height: 500px;
  float: left;
  display: block;

  background-color: #e8be3f;
  transition: background-color 0.3s;
  &:hover {
    background-color: #f2d581;
  }
`;

const Five = styled.article`
  width: 33%;
  height: 500px;
  float: left;
  display: block;

  background-color: #f058d4;
  transition: background-color 0.3s;
  &:hover {
    background-color: #eb97db;
  }
`;

const Six = styled.article`
  width: 33%;
  height: 500px;
  float: left;
  display: block;

  background-color: #433abc;
  transition: background-color 0.3s;
  &:hover {
    background-color: #5b54bd;
  }
`;

const Img = styled.img`
  margin: 20px 0px 20px 90px;
  vertical-align: middle;
  width: 150px;
  height: 150px;
  transition: all 0.3s;
  transform: scale(1);
`;

const H2 = styled.h2`
  color: #fff;
  font-size: 30px;

  text-align: center;
  padding: 20px 0;
`;

const H4 = styled.h4`
  color: #fff;
  font-size: 18px;
  margin: 0px 15px 0px 15px;
  text-align: center;
  padding: 20px 0;
`;

const Footer = styled.footer`
  clear: both;

  width: 100%;
  height: 80px;
  background-color: #f9f9f9;
`;

const Copyright = styled.div`
  float: left;
  width: 50%;
`;

const Address = styled.div`
  float: right;
  width: 50%;
`;

const CP = styled.p`
  font-size: 14px;
  color: #999;

  padding: 32px 0 0 40px;
`;

const AP = styled.p`
  font-size: 14px;
  color: #999;

  text-align: right;

  padding: 32px 40px 0 0;
`;

export { Container, A, Div, Img, One, Two, Three, Four, Five, Six, H2, H4, H1, Footer, Copyright, Address, CP, AP };
