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
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  margin: 20px 0 10px 0;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 10px #e4e4e4;
  word-break: keep-all;

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
    font-size: 1.5em;
    font-weight: 800;
    color: var(--primary);
    margin-left: 20px;
  }

  p {
    line-height: 1.5; /* 행간조절 */
    /* description가 넘칠 경우 ...(말줄임)처리 */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* 2줄이 넘어가면 말줄임 */
    -webkit-box-orient: vertical;
  }
`;

const Button = styled.button`
  display: flex;
  float: right;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  margin-left: auto;
  color: white;
  background-color: #484bcc;
  &:hover {
    background-color: #5355c9;
  }
  border-radius: 8px;
  box-shadow: 0 4px 6px #e4e4e4;
  word-break: keep-all;
  border: none;
`;

const TagBox = styled.div``;

export { TabDiv, TabContainer, TagContainer, FilterContainer, CommunityPostContainer, PostButtonContainer, RightPostContainer, PostsTitle, PostBox, TagBox, Button };
