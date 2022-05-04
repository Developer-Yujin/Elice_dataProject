import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TagList from "./TagList";
import { TagBox, StackFilterTag } from "./TagFilterStyles";

const TagFilter = function ({ tagQueryFunction, tagReset, tagResetDoneFunction }) {
  // 현재 URL 정보 가져오기
  const location = useLocation();

  const [tagUrls, setTagUrls] = useState([]);

  const handleClickTag = async (e) => {
    // 이미 클릭되어있는 버튼을 또 눌렀을 경우, isClicked== false, tagUrls 배열에서 제거
    if (tagUrls.includes(e.name) === true) {
      setTagUrls(
        tagUrls.filter(function (data) {
          return data !== e.name;
        }),
      );
      e.isClicked = false;
    } else {
      setTagUrls([...tagUrls, e.name]);
      e.isClicked = true;
    }
  };

  const [tagResetDone, setTagResetDone] = useState(false);

  useEffect(() => {
    tagQueryFunction(tagUrls);
    if (tagReset === true) {
      setTagUrls("");
      setTagResetDone(true);
      tagResetDoneFunction(tagResetDone);
    }
  }, [tagUrls, tagQueryFunction, location, tagReset, tagResetDoneFunction, tagResetDone]);

  return (
    <TagBox>
      {TagList.map((e) => (
        <StackFilterTag className={e.name} key={`tag${e.filterId}`} name={e.name} value={e.name} isClicked={tagReset === true ? (e.isClicked = false) : e.isClicked} onClick={() => handleClickTag(e)}>
          {e.name}
        </StackFilterTag>
      ))}
    </TagBox>
  );
};

export default TagFilter;
