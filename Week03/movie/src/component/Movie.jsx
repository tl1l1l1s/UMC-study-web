import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MovieContainer = styled.div`
  background-color: #383a69;
  color: white;
  text-align: left;

  img {
    width: 100%;
  }

  :hover {
    cursor: pointer;
  }
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  padding-bottom: 35px;
`;

const Title = styled.div``;

const Rate = styled.div``;

export const Movie = (item) => {
  const navigate = useNavigate();
  const {
    title,
    original_title,
    poster_path,
    backdrop_path,
    vote_average,
    release_date,
    overview,
  } = item.item;

  return (
    <MovieContainer
      onClick={() =>
        navigate(`/detail/${title}`, {
          state: {
            original_title: original_title,
            backdrop_path: backdrop_path,
            poster_path: poster_path,
            rate: vote_average,
            release_date: release_date,
            overview: overview,
          },
        })
      }
    >
      <img src={"http://image.tmdb.org/t/p/w500/" + poster_path} />
      <Description>
        <Title>{title}</Title>
        <Rate>⭐️{vote_average}</Rate>
      </Description>
    </MovieContainer>
  );
};
