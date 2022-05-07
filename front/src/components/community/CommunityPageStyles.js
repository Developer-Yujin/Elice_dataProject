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

.MuiGrid-container {
  justify-content: center;
}
`;

const PostButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const RightPostContainer = styled.div`
  width: 100%;
  min-width: 830px;
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

const PostBox = styled.div`
  width: 100%;
  height: auto;
  padding: 30px;
  background-color: #fff;
  box-shadow: 0 4px 10px #e4e4e4;
  border-radius: 10px;
  transition: 1s;

  &:hover {
    background-color: var(--inputBackground);
  }

  div {
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
  }

  h2 {
    color: #000;
    margin-left: 20px;
  }

  p {
    line-height: 1.5; /* 행간조절 */
    /* description가 넘칠 경우 ...(말줄임)처리 */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* 2줄이 넘어가면 말줄임 */
    -webkit-box-orient: vertical;
  }
`;

const Button = styled.label`
  background-color: var(--primary);
  margin-left: auto;
  padding: 10px 15px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 500;
  color: #fff;
`;

const TagBox = styled.div``;

export { TabDiv, TabContainer, TagContainer, FilterContainer, CommunityPostContainer, PostButtonContainer, RightPostContainer, PostsTitle, PostBox, TagBox, Button };
