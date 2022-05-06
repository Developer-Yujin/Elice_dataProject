import styled from "styled-components";

const TabDiv = styled.div`
  margin: 10px 0;
`;

const TabContainer = styled.div`
  display: flex;
`;

const TabButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${(props) => (props.isClicked ? "var(--primary)" : "var(--textSecondary)")};

  cursor: pointer;
`;

const TabActiveBar = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--borderPrimary);
`;

const ActiveLine = styled.div`
  width: 100px;
  height: 3px;
  background-color: var(--primary);
  transition: all 0.3s ease;
  transform: translateX(calc(100% * ${(props) => props.activeLine}));
`;

export { TabDiv, TabContainer, TabButton, TabActiveBar, ActiveLine };
