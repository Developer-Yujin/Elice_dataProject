import styled from "styled-components";

const PostFormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const PostTitleForm = styled.input`
  flex-direction: column;
  width: 100%;
  padding: 1vh 1vh 2vh 1vh;
  margin: 20px 0 10px 0;
  background-color: #fff;
  border-radius: 7px;
  box-shadow: 0 3px 10px #e4e4e4;
  // word-break: keep-all;
`;

const PostContentForm = styled.textarea`
  flex-direction: column;
  width: 100%;
  height: 50vh;
  padding: 1vh 1vh 2vh 1vh;
  margin: 5px 0 10px 0;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 3px 10px #e4e4e4;
  word-break: keep-all;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  word-break: keep-all;
`;

const SubmitButton = styled.button`
  display: flex;
  float: center;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  color: white;
  background-color: #484bcc;
  &:hover {
    background-color: #5355c9;
  }
  border-radius: 8px;
  box-shadow: 0 3px 5px #e4e4e4;
  border: none;
  margin: 5px 10px 5px 10px;
`;

const UndoButton = styled.button`
  display: flex;
  float: center;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  color: white;
  background-color: #545454;
  &:hover {
    background-color: #787878;
  }
  border-radius: 8px;
  box-shadow: 0 3px 5px #e4e4e4;
  border: none;
  margin: 5px 10px 5px 10px;
`;

export { PostFormContainer, PostTitleForm, PostContentForm, ButtonContainer, SubmitButton, UndoButton };
