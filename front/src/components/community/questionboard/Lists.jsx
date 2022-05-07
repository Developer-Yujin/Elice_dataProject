import React, { useEffect, useState } from "react";
import { get } from "../../../api";
import { useNavigate } from "react-router";
import { ListContainer, ListCard, BoardAuthor, BoardTitle, BoardContent, WriteButton } from ".././freeboard/ListsStyles";

const Lists = ({ setViewType }) => {
  const navigate = useNavigate();
  const [isFetchCompleted, setIsFetchCompleted] = useState(false);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    async function loadquestionList() {
      const res = await get(`questions`);
      setLists(res.data);
      setIsFetchCompleted(true);
    }
    loadquestionList();
  }, []);

  // * * Skeleton Code 작성할 것
  if (!isFetchCompleted) {
    return "Loading...";
  }

  const Changeview = (questionboard) => {
    const postid = questionboard.currentTarget.id;
    // setViewType("View");
    navigate(`/community/questions/${postid}`, { state: postid });
    setViewType("View");
  };

  return (
    <div>
      <WriteButton onClick={() => setViewType("form")}>게시글 작성</WriteButton>
      <ListContainer>
        {lists.map((questionboard) => (
          <ListCard key={questionboard._id} id={questionboard._id} onClick={(questionboard) => Changeview(questionboard)}>
            <BoardAuthor>
              ✨ <b>{questionboard.name}</b> ✨님이 작성하신 글이예요!
            </BoardAuthor>
            <BoardTitle>{questionboard.title}</BoardTitle>
            <BoardContent>{questionboard.content}</BoardContent>
          </ListCard>
        ))}
      </ListContainer>
    </div>
  );
};

export default Lists;
