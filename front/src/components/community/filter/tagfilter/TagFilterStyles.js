import styled from "styled-components";

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

export { TagBox, StackFilterTag };
