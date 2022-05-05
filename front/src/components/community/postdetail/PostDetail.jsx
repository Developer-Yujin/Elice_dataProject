import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { get, post } from "../../../api";

const PostDetail = function () {
  const params = useParams();
  const [postData, setPostData] = useState(null);
  const [isFetchCompleted, setIsFetchCompleted] = useState(false);

  useEffect(() => {
    const postLoading = async () => {
      const res = await get(`recruits/${params.id}`);
      setPostData(res.data);
      setIsFetchCompleted(true);
    };
    postLoading();
  }, [params.id]);

  if (!isFetchCompleted) {
    return "postData loading...";
  }

  return (
    <PostDetailContainer>
      <StatusTag isRecruited={postData.status === "recruited"}>{postData.status === "recruited" ? "모집중" : "모집완료"}</StatusTag>
      <h3>{postData.title}</h3>
      <div>
        {postData.name}
        <p>{postData.updatedAt}</p>
      </div>
      <div>{postData.tag.join(",")}</div>
      <div>{postData.content}</div>
    </PostDetailContainer>
  );
};

export default PostDetail;

const PostDetailContainer = styled.div`
  margin: 50px 100px;
  padding: 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 7px 10px #e4e4e4;
`;

const StatusTag = styled.div`
  width: 60px;
  padding: 7px 5px;
  text-align: center;
  background-color: ${(props) => (props.isRecruited ? "var(--primary)" : "var(--textSecondary)")};
  border-radius: 7px;
  font-size: 13px;
  font-weight: 600;
  color: #fff;
`;
