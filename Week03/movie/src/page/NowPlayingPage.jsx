import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LoadingSpinner } from "../component/LoadingSpinner";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  padding: 40px;
  background-color: #21234b;
`;

const Movie = styled.div`
  background-color: #383a69;
  color: white;

  img {
    width: 100%;
  }
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  padding-bottom: 60px;
`;

const Title = styled.div``;

const Rate = styled.div``;

const NowPlayingPage = () => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MWFjZTJhNmUwMjY3NjI3ZTU3OWRkYWRmNTA5YzNkMyIsInN1YiI6IjY2MWQwNWRlNjBjNTFkMDE4NjRlYzQ5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rpY_VCCrowKMdMCuPi-k9hM6tiMx8LSRLf9MYv6m5-s",
    },
  };
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        options
      )
        .then((res) => res.json())
        .catch((err) => console.log(err));

      setMovieList(data.results.slice(0, 8));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Container>
          {movieList.map((item) => (
            <Movie
              key={item.id}
              onClick={() =>
                navigate(`/detail/${item.title}`, {
                  state: {
                    original_title: item.original_title,
                    backdrop_path: item.backdrop_path,
                    poster_path: item.poster_path,
                    rate: item.vote_average,
                    release_date: item.release_date,
                    overview: item.overview,
                  },
                })
              }
            >
              <img src={"http://image.tmdb.org/t/p/w500/" + item.poster_path} />
              <Description>
                <Title>{item.title}</Title>
                <Rate>⭐️{item.vote_average}</Rate>
              </Description>
            </Movie>
          ))}
        </Container>
      )}
    </>
  );
};

export default NowPlayingPage;
