import { PostFormContainer, PostTitleForm, PostContentForm, ButtonContainer, SubmitButton, UndoButton } from "../freeboard/PostFormStyles";
import React, { useState, useContext } from "react";
import { UserStateContext } from "../../../App";
import { useLocation, useNavigate } from "react-router-dom";

import { post } from "../../../api";

const AddPost = function () {
  const location = useLocation();
  const navigate = useNavigate();
  const userState = useContext(UserStateContext);
  const currentUser = userState.user;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [selectTag, setSelectTag] = useState([]);

  const [isCanceled, setIsCanceled] = useState(false);
  // PostAddCancelFunction(isCanceled);

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (location.pathname === "/community/recruits") {
      await post("recruits", {
        user_id: currentUser.id,
        title,
        content,
      });
      navigate("/community/recruits");
    } else if (location.pathname === "/community/findteams") {
      await post("findteams", {
        user_id: currentUser.id,
        title,
        content,
      });
      navigate("/community/findteams");
    }

    setIsCanceled(false);
  };

  return (
    <PostFormContainer onSubmit={handleSubmit}>
      <PostTitleForm id="title" type="text" oonChange={(e) => setTitle(e.target.value)} value={title} placeholder="제목을 작성해주세요." />
      <PostContentForm id="content" onChange={(e) => setContent(e.target.value)} value={content} placeholder="내용을 입력해주세요." />
      <ButtonContainer>
        <SubmitButton type="submit">등록</SubmitButton>
        <UndoButton type="button" onClick={() => setIsCanceled(true)}>
          취소
        </UndoButton>
      </ButtonContainer>
    </PostFormContainer>
  );
};

export default AddPost;
