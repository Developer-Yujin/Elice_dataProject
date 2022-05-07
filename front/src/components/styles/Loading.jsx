import React from "react";
import styled from "styled-components";

const Loading = function () {
  return (
    <Container>
      <center>
        <img src="https://blog.kakaocdn.net/dn/dcdgsI/btrBrJXkEtb/gppFMYgSxgNwWYx9RMsfV0/img.gif" alt="loading" />
      </center>
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  align-items: center;
  justify-content: center;
`;
