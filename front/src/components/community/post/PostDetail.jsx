import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { get } from "../../../api";

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
      <TitleBox>
        <label className={postData.status}>{postData.status === "recruited" ? "모집중" : "모집완료"}</label>
        <h2>{postData.title}</h2>
      </TitleBox>
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
  min-height: 450px;
  margin: 50px 100px;
  padding: 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 7px 10px #e4e4e4;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  label {
    max-height: 28px;
    padding: 5px 10px;
    color: #fff;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 600;
  }

  .recruited {
    background-color: var(--primary);
  }

  .unrecruited {
    background-color: var(--textSecondary);
  }

  h2 {
    color: #000;
    margin-left: 20px;
  }
`;
