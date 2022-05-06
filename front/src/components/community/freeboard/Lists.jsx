import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { get } from "../../../api";
import { ListContainer, ListCard, BoardAuthor, BoardTitle, BoardContent, WriteButton } from "./ListsStyles";

const Lists = ({ setViewType }) => {
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
            <BoardContent>{freeboard.content}</BoardContent>
          </ListCard>
        ))}
      </ListContainer>
    </div>
  );
};

export default Lists;
