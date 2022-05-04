import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const TagFilter = function ({ handleCallbackTagFilter }) {
  const [tagUrls, setTagUrls] = useState([]);
  const [tagUrlQuery, setTagUrlQuery] = useState("");
  const doneRef = useRef(false);

  const handleClickTag = async (e) => {
    // 이미 클릭되어있는 버튼을 또 눌렀을 경우, isClicked== false, tagUrls 배열에서 제거
    if (tagUrls.includes(e.name) === true) {
      setTagUrls(
        tagUrls.filter(function (data) {
          return data !== e.name;
        }),
      );
      e.isClicked = false;
      makeQuery();
    } else {
      setTagUrls([...tagUrls, e.name]);
      e.isClicked = true;
      makeQuery();
    }
  };

  const makeQuery = () => {
    doneRef.current = true;
    if (tagUrls.length === 1) {
      setTagUrlQuery(tagUrls[0]);
    } else {
      setTagUrlQuery(tagUrls.join("%2C"));
    }
  };
  /*
  useEffect(() => {
    if (doneRef.current) {
      doneRef.current = false;
    }
    console.log("tagUrlQuery : " + tagUrlQuery);
  }, [tagUrlQuery]);
  */

  useEffect(() => {
    handleCallbackTagFilter(tagUrls);
  });

  return (
    <TagBox>
      {STACK_LIST.map((e) => (
        <StackFilterTag className={e.value} key={e.filterId} name={e.name} value={e.value} isClicked={e.isClicked} onClick={() => handleClickTag(e)}>
          {e.name}
        </StackFilterTag>
      ))}
    </TagBox>
  );
};

export default TagFilter;

const TagBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  margin: 10px 0;
  padding: 20px 10px;
  background-color: var(--inputBackground);
  border-radius: 5px;
`;

const StackFilterTag = styled.button`
  margin-right: 10px;
  padding: 5px 10px;
  border-radius: 30px;
  font-size: 11px;
  font-weight: 500;
  color: ${(props) => (props.isClicked ? "#fff" : "var(--primary)")};
  background-color: ${(props) => (props.isClicked ? "var(--primary)" : "#fff")};
  border: 1px solid var(--primary);
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: var(--primary);
  }
`;

const STACK_LIST = [
  {
    filterId: 1,
    name: "Java",
    isClicked: false,
  },
  {
    filterId: 2,
    name: "JavaScript",
    isClicked: false,
  },
  {
    filterId: 3,
    name: "Python",
    isClicked: false,
  },
  {
    filterId: 4,
    name: "C",
    isClicked: false,
  },
  {
    filterId: 5,
    name: "C++",
    isClicked: false,
  },
  {
    filterId: 6,
    name: "Frond-end",
    isClicked: false,
  },
  {
    filterId: 7,
    name: "Back-end",
    isClicked: false,
  },
  {
    filterId: 8,
    name: "Full-stack",
    isClicked: false,
  },
];
