import { useState, useContext } from "react";
import { post } from "../../../api";
import styled from "styled-components";

function Postform({ user, setViewType }) {
  const [tempPost, setTempPost] = useState({
    title: "",
    content: "",
  });

  const handlePostValue = (name, value) => {
    setTempPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (window.confirm("게시글을 등록 하겠습니까?")) {
        const res = await post("freeboards", {
          user_id: user.id,
          name: user.name,
          ...tempPost,
        });
        setTempPost((prev) => [...prev, res.data]);
        setViewType("list");
      }
    } catch (error) {
      alert(`${error}로 인하여 게시글을 작성하지 못했습니다.`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <span>
        <input id="title" type="text" onChange={(e) => handlePostValue("title", e.target.value)} placeholder="제목을 입력해주세요." value={tempPost.title} />
      </span>
      <br />
      <span>
        <textarea id="content" onChange={(e) => handlePostValue("content", e.target.value)} placeholder="내용을 입력해주세요." value={tempPost.content} />
      </span>
      <br />
      <button margin="10" type="submit" onSubmit={handleSubmit}>
        등록
      </button>
      <button type="button" onClick={() => setViewType("list")}>
        취소
      </button>
    </form>
  );
}

export default Postform;

// input {
//   width: 600px;
//   padding: 10px;
//   margin: 10px;
// }

// textarea {
//   width: 602px;
//   height: 500px;
//   padding: 10px;
//   margin: 10px;
//   resize: none;
// }

// button {
//   padding: 10px;
//   margin: 10px;
// }
