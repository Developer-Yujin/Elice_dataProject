import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserStateContext } from "../../../App";
import { post } from "../../../api";
import { PostFormContainer, PostTitleForm, PostContentForm, ButtonContainer, SubmitButton, UndoButton } from "../freeboard/PostFormStyles";

function PostAdd({ PostAddCancelFunction }) {
  const location = useLocation();
  const navigate = useNavigate();
  const userState = useContext(UserStateContext);
  const currentUser = userState.user;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [isClickedCancel, setIsClickedCancel] = useState(false);
  PostAddCancelFunction(isClickedCancel);

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    await post("findteams", {
      user_id: currentUser.id,
      title,
      content,
    });
    // window.location.href = "/community/findteams";
    // window.location.assign("/community/findteams");
    // window.location.replace("/community/findteams");

    setIsClickedCancel(true);
  };

  return (
    <PostFormContainer onSubmit={handleSubmit}>
      <PostTitleForm id="title" type="text" onChange={(e) => setTitle(e.target.value)} placeholder="제목을 작성해주세요." />
      <PostContentForm id="content" onChange={(e) => setContent(e.target.value)} placeholder="내용을 입력해주세요." />
      <ButtonContainer>
        <SubmitButton type="submit">등록</SubmitButton>
        <UndoButton type="button" onClick={() => setIsClickedCancel(true)}>
          취소
        </UndoButton>
      </ButtonContainer>
    </PostFormContainer>
  );
}

export default PostAdd;
