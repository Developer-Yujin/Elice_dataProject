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
padding: 0 100px;
margin: 80px 0;
`;

const PostButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const RightPostContainer = styled.div`
  width: 830px;
  height: auto;
  padding: 30px 50px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 7px 10px #e4e4e4;
`;

const PostsTitle = styled.p`
  font-size: 25px;
  margin-bottom: 30px;
  font-weight: 600;
  color: var(--textPrimary);
`;

export { TabDiv, TabContainer, TagContainer, FilterContainer, CommunityPostContainer, PostButtonContainer, RightPostContainer, PostsTitle };
