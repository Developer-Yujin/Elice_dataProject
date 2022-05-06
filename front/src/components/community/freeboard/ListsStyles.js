import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const ListCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1200px;
  height: 150px;
  padding: 1vh 1vh 2vh 1vh;
  margin: 20px 0 10px 0;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 10px #e4e4e4;
  word-break: keep-all;
`;

const BoardAuthor = styled.div`
  color: #a9a9a9;
  text-align: right;
`;

const BoardTitle = styled.div`
  color: #484bcc;
  font-size: 1.5em;
  font-weight: 800;
  padding: 0 0 5px 0;
`;

const BoardContent = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 600px;
  height: 20px;
`;

const WriteButton = styled.button`
  display: flex;
  float: right;
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
  box-shadow: 0 4px 6px #e4e4e4;
  word-break: keep-all;
`;

export { ListContainer, ListCard, BoardAuthor, BoardTitle, BoardContent, WriteButton };
