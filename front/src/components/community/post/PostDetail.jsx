import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { del } from "../../../api";
import { UserStateContext } from "../../../App";

const PostDetail = function () {
  const { state } = useLocation();
  const navigate = useNavigate();
  const userState = useContext(UserStateContext);
  const currentUser = userState.user;

  const [postData, setPostData] = useState(null);
  const [isFetchCompleted, setIsFetchCompleted] = useState(false);

  const deleteNavigate = async () => {
    await del("recruits", state);
    navigate("/community/recruits");
    setIsFetchCompleted(true);
  };

  if (!isFetchCompleted) {
    return "postData loading...";
  }

  return (
    <PostDetailContainer>
      <PostContainer>
        <label className={postData.status}>{postData.status === "recruited" ? "모집중" : "모집완료"}</label>

        <PostTitle> ✨ {postData.title}</PostTitle>
        <div>{postData.tag.join(",")}</div>

        <PostContent>{postData.content}</PostContent>
        <ButtonContainer>
          <ListButton onClick={() => navigate("/community/recruits")}>목록</ListButton>
          <EditButton>수정</EditButton>
          <DeleteButton onClick={deleteNavigate}>삭제</DeleteButton>
        </ButtonContainer>
      </PostContainer>
    </PostDetailContainer>
  );
};

export default PostDetail;

const PostDetailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const PostContainer = styled.div`
  flex-direction: column;
  width: 100%;
  height: 50vh;
  padding: 1vh 1vh 2vh 1vh;
  margin: 20px 0 10px 0;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 10px #e4e4e4;
  // word-break: keep-all;
`;

const PostdAuthor = styled.div`
  color: #a9a9a9;
  text-align: right;
  padding: 5px;
`;

const PostTitle = styled.div`
  color: #484bcc;
  font-size: 1.5em;
  font-weight: 800;
  padding: 7px 0 5px 0;
  background-color: #f1f1fb;
  border-radius: 7px;
`;

const PostContent = styled.div`
  padding: 5px;
  height: 72%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  word-break: keep-all;
`;

const ListButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  margin: 0 10px 0px 10px;
  color: white;
  background-color: #cccccc;
  &:hover {
    background-color: #828282;
  }
  border-radius: 8px;
  box-shadow: 0 4px 6px #e4e4e4;
  word-break: keep-all;
  border: none;
`;

const EditButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  margin: 0 10px 0px 10px;
  color: white;
  background-color: #484bcc;
  &:hover {
    background-color: #1b1e8f;
  }
  border-radius: 8px;
  box-shadow: 0 4px 6px #e4e4e4;
  word-break: keep-all;
  border: none;
`;

const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  margin: 0 10px 0px 10px;
  color: white;
  background-color: #660909;
  &:hover {
    background-color: #c20a0a;
  }
  border-radius: 8px;
  box-shadow: 0 4px 6px #e4e4e4;
  word-break: keep-all;
  border: none;
`;