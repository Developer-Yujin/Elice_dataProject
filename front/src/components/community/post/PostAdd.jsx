import { PostFormContainer, PostTitleForm, PostContentForm, ButtonContainer, SubmitButton, UndoButton } from "./PostFormStyles";
import React, { useState, useContext } from "react";
import { UserStateContext } from "../../../App";
import { useLocation, useNavigate } from "react-router-dom";
import { TagBox, StackFilterTag } from "./TagFilterStyles";
import TagList from "./TagFilterList";

import { post } from "../../../api";

const PostAdd = function () {
  const location = useLocation();
  const navigate = useNavigate();
  const userState = useContext(UserStateContext);
  const currentUser = userState.user;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectTags, setSelectTags] = useState([]);
  const tagReset = false;
  const [isCanceled, setIsCanceled] = useState(false);
  // PostAddCancelFunction(isCanceled);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // e.stopPropagation();
    if (location.pathname === "/community/recruits") {
      await post("recruits", {
        user_id: currentUser.id,
        title,
        content,
        tag: selectTags,
      });
      navigate("/community/recruits");
    } else if (location.pathname === "/community/findteams") {
      await post("findteams", {
        name: currentUser.id,
        title,
        content,
        tag: selectTags,
      });
      navigate("/community/findteams");
    }

    setIsCanceled(false);
  };

  const handleClickTag = async (e) => {
    // 이미 클릭되어있는 버튼을 또 눌렀을 경우, isClicked== false, tagUrls 배열에서 제거
    if (selectTags.includes(e.name) === true) {
      setSelectTags(
        selectTags.filter(function (data) {
          return data !== e.name;
        }),
      );
      e.isClicked = false;
    } else {
      setSelectTags([...selectTags, e.name]);
      e.isClicked = true;
    }
    tagReset(true);
  };

  return (
    <PostFormContainer onSubmit={handleSubmit}>
      <PostTitleForm id="title" type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="제목을 작성해주세요." />
      <TagBox>
        {TagList.map((e) => (
          <StackFilterTag
            className={e.name}
            key={`tag${e.filterId}`}
            type="button"
            name={e.name}
            value={e.name}
            isClicked={tagReset === true ? (e.isClicked = false) : e.isClicked}
            onClick={() => handleClickTag(e)}
          >
            {e.tag}
          </StackFilterTag>
        ))}
      </TagBox>
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

export default PostAdd;
