import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { get, del } from "../../../api";
import { PostViewContainer, PostContainer, PostdAuthor, PostTitle, PostContent, ButtonContainer, ListButton, EditButton, DeleteButton } from "../freeboard/PostViewStyles";

// import Comments from "./FreeboardComments";
// import CommentForm from "./FreeboardCommentForm";

function QPostView({ setViewType, setIsEditable }) {
  const { state } = useLocation();
  const [postInfo, setPostInfo] = useState(null);
  const [isFetchCompleted, setIsFetchCompleted] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadPostView() {
      const res = await get(`questions/${state}`);
      setPostInfo(res.data);
      setIsFetchCompleted(true);
    }
    loadPostView();
  }, [setViewType]);

  if (!isFetchCompleted) {
    return "loading...";
  }

  const deleteNavigate = async () => {
    try {
      if (window.confirm("게시글을 삭제하시겠습니까?")) {
        console.log(state);
        await del("questions", state);
        navigate("/community/questions");
      }
    } catch (error) {
      alert(`${error}로 인하여 게시글을 삭제하지 못했습니다.`);
    }
  };

  const EditNavigate = async () => {
    const postid = postInfo;
    console.log(postid);
    setIsEditable(true);
    setViewType("Form");
    console.log("b");
    navigate(`/community/questions`, { state: postid });
    console.log("c");
  };

  return (
    <PostViewContainer>
      <ListButton onClick={() => navigate("/community/questions")}>목록</ListButton>
      <PostContainer>
        <PostTitle> ✨ {postInfo.title}</PostTitle>
        <PostdAuthor> 작성자 : {postInfo.name} </PostdAuthor>
        <PostContent>{postInfo.content}</PostContent>
        {/* <Comments user={user} postId={params.id} />
      <CommentForm user={user} postId={params.id} /> */}
      </PostContainer>
      <ButtonContainer>
        <EditButton onClick={EditNavigate}>수정</EditButton>
        <DeleteButton onClick={deleteNavigate}>삭제</DeleteButton>
      </ButtonContainer>
    </PostViewContainer>
  );
}

export default QPostView;
