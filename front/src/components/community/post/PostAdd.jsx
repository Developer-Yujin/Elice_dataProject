import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserStateContext } from "../../../App";
import { post } from "../../../api";
import { PostFormContainer, PostTitleForm, PostContentForm, ButtonContainer, SubmitButton, UndoButton } from "../freeboard/PostFormStyles";
import { TagBox, StackFilterTag } from "./TagFilterStyles";

import TagList from "./TagFilterList";

function PostAdd({ PostAddCancelFunction, tagReset }) {
  const location = useLocation();
  const navigate = useNavigate();
  const userState = useContext(UserStateContext);
  const currentUser = userState.user;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [isClickedCancel, setIsClickedCancel] = useState(false);
  PostAddCancelFunction(isClickedCancel);

  const handleSubmit = async (e) => {
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

    setIsClickedCancel(true);
  };

  const [tag, setTag] = useState([]);

  const handleClickTag = async (e) => {
    // 이미 클릭되어있는 버튼을 또 눌렀을 경우, isClicked== false, tagUrls 배열에서 제거
    if (tag.includes(e.name) === true) {
      setTag(
        tag.filter(function (data) {
          return data !== e.name;
        }),
      );
      e.isClicked = false;
    } else {
      setTag([...tag, e.name]);
      e.isClicked = true;
    }
  };

  return (
    <PostFormContainer onSubmit={handleSubmit}>
      <PostTitleForm id="title" type="text" onChange={(e) => setTitle(e.target.value)} placeholder="제목을 작성해주세요." />
      <TagBox>
        {TagList.map((e) => (
          <StackFilterTag
            className={e.name}
            key={`tag${e.filterId}`}
            name={e.name}
            value={e.name}
            isClicked={tagReset === true ? (e.isClicked = false) : e.isClicked}
            onClick={() => handleClickTag(e)}
          >
            {e.tag}
          </StackFilterTag>
        ))}
      </TagBox>
      <PostContentForm id="content" onChange={(e) => setContent(e.target.value)} placeholder="내용을 입력해주세요." />
      <ButtonContainer>
        <SubmitButton type="submit" value="trud">
          등록
        </SubmitButton>
        <UndoButton type="button" onClick={() => setIsClickedCancel(true)}>
          취소
        </UndoButton>
      </ButtonContainer>
    </PostFormContainer>
  );
}

export default PostAdd;
