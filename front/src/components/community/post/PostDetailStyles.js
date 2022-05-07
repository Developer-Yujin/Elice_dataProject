import styled from "styled-components";

const PostDetailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100vh;
  height: 100%;
  margin: 60px auto;
`;

const PostContainer = styled.div`
  flex-direction: column;
  width: 100%;
  height: 50vh;
  padding: 1vh 1vh 2vh 1vh;
  margin: 20px 0 10px 0;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 10px #e4e4e4;
  // word-break: keep-all;
`;

const PostdAuthor = styled.div`
  color: #a9a9a9;
  text-align: right;
  padding: 5px;
  margin: 0 10px 0 0;
`;

const PostTitle = styled.div`
  color: #484bcc;
  font-size: 1.5em;
  font-weight: 800;
  padding: 7px 0 5px 0;
  background-color: #f1f1fb;
  border-radius: 7px;
`;

const PostContent = styled.div`
  padding: 5px;
  height: 72%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  word-break: keep-all;
  margin: 10px 0;
`;

const ListButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  margin: 0 10px 0px 0px;
  color: white;
  background-color: #cccccc;
  &:hover {
    background-color: #828282;
  }
  border-radius: 8px;
  box-shadow: 0 5px 7px #f0f0f0;
  word-break: keep-all;
  border: none;
`;

const EditButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  margin: 0 10px 0px 10px;
  color: white;
  background-color: #484bcc;
  &:hover {
    background-color: #1b1e8f;
  }
  border-radius: 8px;
  box-shadow: 0 4px 6px #e4e4e4;
  word-break: keep-all;
  border: none;
`;

const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  margin: 0 10px 0px 10px;
  color: white;
  background-color: #660909;
  &:hover {
    background-color: #c20a0a;
  }
  border-radius: 8px;
  box-shadow: 0 4px 6px #e4e4e4;
  word-break: keep-all;
  border: none;
`;

export { PostDetailContainer, PostContainer, PostdAuthor, PostTitle, PostContent, ButtonContainer, ListButton, EditButton, DeleteButton };
