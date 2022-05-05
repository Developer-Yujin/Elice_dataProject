import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { get, del } from "../../../api";
import styled from "styled-components";
import Comments from "./FreeboardComments";
import CommentForm from "./FreeboardCommentForm";

function PostView({ setViewType }) {
  const { state } = useLocation();
  const [postInfo, setPostInfo] = useState(null);
  const [isFetchCompleted, setIsFetchCompleted] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

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
        await del("freeboards", state);
        // * * 자유게시판 엔드포인트 완성되면 거기로 보내주기
        navigate("/community/freeboards");
      }
    } catch (error) {
      alert(`${error}로 인하여 게시글을 삭제하지 못했습니다.`);
    }
  };

  return (
    <>
      <h2>{postInfo.title}</h2>
      <div> 작성자 : {postInfo.name} </div>
      <p>{postInfo.content}</p>
      <button id="list"> 목록</button>
      <button>수정</button>
      <button onClick={deleteNavigate}>삭제</button>
      {/* <Comments user={user} postId={params.id} />
      <CommentForm user={user} postId={params.id} /> */}
    </>
  );
}

export default PostView;
