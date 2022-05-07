import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { del, get } from "../../../api";
import { PostDetailContainer, PostContainer, PostdAuthor, PostTitle, PostContent, ButtonContainer, ListButton, EditButton, DeleteButton } from "./PostDetailStyles";

const RecruitsPostDetail = function () {
  const navigate = useNavigate();
  const params = useParams();
  const [postData, setPostData] = useState([]);

  const [isFetchCompleted, setIsFetchCompleted] = useState(false);

  useEffect(() => {
    const recruitsPostDetail = async () => {
      const res = await get(`recruits/${params.id}`);
      setPostData(res.data);
      setIsFetchCompleted(true);
    };

    recruitsPostDetail();
  }, [params.id]);

  const deleteNavigate = async () => {
    try {
      if (window.confirm("게시글을 삭제하시겠습니까?")) {
        await del("recruits", params.id);
        navigate("/community/recruits");
        setIsFetchCompleted(true);
      }
    } catch (error) {
      alert("게시글 삭제 실패, 다시 시도해주세요.");
    }
  };

  if (!isFetchCompleted) {
    return "postData loading...";
  }

  return (
    <PostDetailContainer>
      <ListButton onClick={() => navigate("/community/freeboards")}>목록</ListButton>
      <PostContainer>
        <label className={postData.status}>{postData.status === "recruited" ? "모집중" : "모집완료"}</label>
        <PostTitle> ✨ {postData.title}</PostTitle>
        <PostdAuthor> 작성자 : {postData.name} </PostdAuthor>
        <div>{postData.tag.join(",")}</div>
        <PostContent>{postData.content}</PostContent>
        <ButtonContainer>
          <EditButton>수정</EditButton>
          <DeleteButton onClick={deleteNavigate}>삭제</DeleteButton>
        </ButtonContainer>
      </PostContainer>
    </PostDetailContainer>
  );
};

export default RecruitsPostDetail;