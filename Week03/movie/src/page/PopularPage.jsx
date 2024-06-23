import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Movie } from "../component/Movie";
import { LoadingSpinner } from "../component/LoadingSpinner";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  padding: 40px;
  background-color: #21234b;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 30px 100px;
  }
`;

const PageContainter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  background-color: #21234b;
  color: white;
  font-size: 18px;
`;

const PageButton = styled.button`
  border: 0px;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  margin: 0px 5%;

  &:disabled {
    display: none;
  }
`;

const PopularPage = () => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPg, setCurrentPg] = useState(1);
  const [totalPg, setTotalPg] = useState(1);

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
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${currentPg}`,
        options
      )
        .then((res) => res.json())
        .catch((err) => console.log(err));

      setMovieList(data.results);
      setTotalPg(data.total_pages);
      setIsLoading(false);
    };

    fetchData();
  }, [currentPg]);

  console.log(movieList);
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Container>
          {movieList.map((item) => (
            <Movie key={item.id} item={item} />
          ))}
        </Container>
      )}
      <PageContainter>
        <PageButton
          disabled={currentPg - 1 <= 0}
          onClick={() => setCurrentPg(currentPg - 1)}
        >
          &lt;
        </PageButton>
        {currentPg}
        <PageButton
          disabled={currentPg + 1 >= totalPg}
          onClick={() => setCurrentPg(currentPg + 1)}
        >
          &gt;
        </PageButton>
      </PageContainter>
    </>
  );
};

export default PopularPage;
