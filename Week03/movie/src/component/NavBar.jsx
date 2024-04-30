import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  const [isLogined, setIsLogined] = useState(false);

  function handleClick() {
    setIsLogined(!isLogined);
  }

  const Container = styled.div`
    padding: 25px 20px;
    display: flex;
    justify-content: space-between;
    background-color: #171b39;
    color: white;

    a {
      color: white;
      text-decoration: none;
      margin: 0px 5px;
      line-height: 20px;
    }

    a:hover {
      cursor: pointer;
      transform: scale(1.2);
      color: #e4b940;
      font-weight: bold;
    }
  `;

  const LinkWrapper = styled.div``;

  return (
    <Container>
      <Link to="/">UMC Movie</Link>
      <LinkWrapper>
        {isLogined ? (
          <Link to="/" onClick={handleClick}>
            로그아웃
          </Link>
        ) : (
          <Link to="/" onClick={handleClick}>
            로그인
          </Link>
        )}
        <Link to="/popular">Popular</Link>
        <Link to="/nowplaying">Now Playing</Link>
        <Link to="/toprated">Top Rated</Link>
        <Link to="/upcoming">Upcoming</Link>
      </LinkWrapper>
    </Container>
  );
};

export default NavBar;
