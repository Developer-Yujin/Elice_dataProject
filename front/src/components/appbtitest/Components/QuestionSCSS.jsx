import styled, { keyframes } from "styled-components";

export const QuestionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
  justify-content: center;
  background-color: #f8f8f8;
`;

export const Progressbar = styled.div`
  margin: 70px auto;
  background-color: #eee;
  width: 600px;
  height: 20px;
  display: flex;
  align-items: center;
  border-radius: 20px;
`;

export const progress = keyframes`{ 0% { width: 0%; } 
100% { width: ${(props) => props.Gage}%; }
}
`;

export const Progress = styled.div`
  background-color: #484bcc;
  width: ${(props) => props.Gage}%;
  height: 20px;
  border-radius: 20px;
  animation: ${progress} 2s ease-out;
`;

export const QuestionBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
  font-size: 2em;
  color: #484bcc;
  padding: 20px;
  margin: 20px;
  text-align: center;
  word-break: keep-all;
`;

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 80px;
  padding: 2vh;
  margin: 0 4vh 0 4vh;
  color: #484bcc;
  border: 2px solid #484bcc;
  background-color: #fff;
  &:hover {
    background: #484bcc;
    color: white;
    transition: 0.3s;
  }
  border-radius: 15px;
  box-shadow: 0 2px 3px #e4e4e4;
  word-break: keep-all;
  text-align: center;
  word-break: keep-all;
`;
