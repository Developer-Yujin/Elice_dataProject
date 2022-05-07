import { useState } from "react";
import { post } from "../../../api";
import { PostFormContainer, PostTitleForm, PostContentForm, ButtonContainer, SubmitButton, UndoButton } from "../freeboard/PostFormStyles";

function PostAdd({ user, setViewType, PostAddCancelFunction }) {
  const [isClickedCancel, setIsClickedCancel] = useState(false);
  const [tempPost, setTempPost] = useState({
    title: "",
    content: "",
  });

  PostAddCancelFunction(isClickedCancel);

  const handlePostValue = (name, value) => {
    setTempPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await post(``, {
        user_id: user.id,
        name: user.name,
        ...tempPost,
      });
      setTempPost((prev) => [...prev, res.data]);
      setViewType("list");
    } catch (error) {
      alert(`${error}로 인하여 게시글을 작성하지 못했습니다.`);
    }
  };

  return (
    <PostFormContainer onSubmit={handleSubmit}>
      <PostTitleForm id="title" type="text" onChange={(e) => handlePostValue("title", e.target.value)} placeholder="제목을 작성해주세요." value={tempPost.title} />
      <PostContentForm id="content" onChange={(e) => handlePostValue("content", e.target.value)} placeholder="내용을 입력해주세요." value={tempPost.content} />
      <ButtonContainer>
        <SubmitButton type="submit" onSubmit={handleSubmit}>
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
