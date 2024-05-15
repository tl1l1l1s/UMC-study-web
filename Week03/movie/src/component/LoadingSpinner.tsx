import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 87%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #21234b;
`;

const Spinner = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border: 0.5rem solid gray;
  border-radius: 50px;
  animation: spin 2s infinite;
  -webkit-animation: spin 2s infinite;

  &::before,
  &::after {
    position: absolute;
    left: 10px;
    content: "";
    width: 20px;
    height: 20px;
    border: 0.5rem solid white;
    border-radius: 50px;
    background-color: white;
  }

  &:before {
    top: 0.063rem;
  }

  &:after {
    bottom: 0.063rem;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingSpinner = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};
