import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { get, del } from "../../../api";
import { PostViewContainer, PostContainer, PostdAuthor, PostTitle, PostContent, ButtonContainer, ListButton, EditButton, DeleteButton } from "./PostViewStyles";

// import Comments from "./FreeboardComments";
// import CommentForm from "./FreeboardCommentForm";

function PostView({ setViewType, setIsEditable }) {
  const { state } = useLocation();
  const [postInfo, setPostInfo] = useState(null);
  const [isFetchCompleted, setIsFetchCompleted] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadPostView() {
      const res = await get(`freeboards/${state}`);
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
        await del("freeboards", state);
        navigate("/community/freeboards");
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
    navigate(`/community/freeboards`, { state: postid });
    console.log("c");
  };

  return (
    <PostViewContainer>
      <PostContainer>
        <PostTitle> ✨ {postInfo.title}</PostTitle>
        <PostdAuthor> 작성자 : {postInfo.name} </PostdAuthor>
        <PostContent>{postInfo.content}</PostContent>
        <ButtonContainer>
          <ListButton onClick={() => setViewType("list")}>목록</ListButton>
          <EditButton onClick={EditNavigate}>수정</EditButton>
          <DeleteButton onClick={deleteNavigate}>삭제</DeleteButton>
        </ButtonContainer>
        {/* <Comments user={user} postId={params.id} />
      <CommentForm user={user} postId={params.id} /> */}
      </PostContainer>
    </PostViewContainer>
  );
}

export default PostView;
