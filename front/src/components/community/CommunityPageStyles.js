import styled from "styled-components";

const TabDiv = styled.div`
  margin: 10px 0;
`;

const TabContainer = styled.div`
  display: flex;
`;

const TagContainer = styled.div`
  display: flex;
`;

const FilterContainer = styled.div`
  flex-direction: column; /*수직 정렬*/
  align-items: center;
  margin-bottom: 20px;
`;

const CommunityPostContainer = styled.div`
width: 100%
display: flex;
flex-direction: column; /*수직 정렬*/
align-items: center;
`;

const PostButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export { TabDiv, TabContainer, TagContainer, FilterContainer, CommunityPostContainer, PostButtonContainer };
