import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 87%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #21234b;

  h1,
  h2,
  a {
    font-size: 24px;
    font-weight: bold;
    color: white;
  }
`;

const NotFoundPage = () => {
  return (
    <>
      <Container>
        <h1>404 NOT FOUND</h1>
        <h2>예상치 못한 에러가 발생했습니다.</h2>
        <Link to="/">메인 화면으로 돌아가기</Link>
      </Container>
    </>
  );
};

export default NotFoundPage;
