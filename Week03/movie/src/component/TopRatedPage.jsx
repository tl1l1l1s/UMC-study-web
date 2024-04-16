import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TopRatedPage = () => {
  const [movieList, setMovieList] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MWFjZTJhNmUwMjY3NjI3ZTU3OWRkYWRmNTA5YzNkMyIsInN1YiI6IjY2MWQwNWRlNjBjNTFkMDE4NjRlYzQ5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rpY_VCCrowKMdMCuPi-k9hM6tiMx8LSRLf9MYv6m5-s",
    },
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        options
      )
        .then((res) => res.json())
        .catch((err) => console.log(err));

      setMovieList(data.results.slice(0, 8));
    };

    fetchData();
  }, []);

  const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    padding: 20px;
    background-color: #21234b;
  `;

  const Movie = styled.div`
    background-color: #383a69;
    color: white;
  `;

  const Description = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
  `;

  const Title = styled.div``;

  const Rate = styled.div``;

  return (
    <Container>
      {movieList.map((item) => (
        <Movie key={item.id}>
          <img src={item.poster_path} />
          <Description>
            <Title>{item.title}</Title>
            <Rate>⭐️{item.vote_average}</Rate>
          </Description>
        </Movie>
      ))}
    </Container>
  );
};

export default TopRatedPage;
