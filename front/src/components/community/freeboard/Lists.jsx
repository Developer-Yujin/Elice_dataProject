import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { get } from "../../../api";
import styled from "styled-components";

const Lists = ({ setViewType, setIsAdding }) => {
  const [isFetchCompleted, setIsFetchCompleted] = useState(false);
  const [lists, setLists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadFreeboardList() {
      const res = await get(`freeboards`);
      setLists(res.data);
      setIsFetchCompleted(true);
    }
    loadFreeboardList();
  }, []);

  // * * Skeleton Code 작성할 것
  if (!isFetchCompleted) {
    return "Loading...";
  }

  const Changeview = (freeboard) => {
    const postid = freeboard.currentTarget.id;
    // setViewType("View");
    navigate(`/community/freeboards`, { state: postid });
    setViewType("View");
    setIsAdding(true);
    console.log(postid);
  };

  return (
    <div>
      <WriteButton onClick={() => setViewType("form")}>게시글 작성</WriteButton>
      <ListContainer>
        {lists.map((freeboard) => (
          <ListCard key={freeboard._id} id={freeboard._id} onClick={(freeboard) => Changeview(freeboard)}>
            <BoardAuthor>
              ✨ <b>{freeboard.name}</b> ✨님이 작성하신 글이예요!
            </BoardAuthor>
            <BoardTitle>{freeboard.title}</BoardTitle>
            {freeboard.content}
          </ListCard>
        ))}
      </ListContainer>
    </div>
  );
};

export default Lists;

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
  // align-items: center;
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
const WriteButton = styled.div`
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
