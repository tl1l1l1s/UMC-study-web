import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import IconSearch from "../assets/IconSearch";

const Container = styled.div`
  text-align: center;
  font-weight: bold;
  color: white;
`;

const WelcomeBox = styled.div`
  padding: 150px 0;
  background-color: black;
  font-size: 24px;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 250px 0;
  font-size: 34px;
  background-color: #21224a;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  padding-left: 20px;
  margin-top: 35px;

  svg {
    height: 30px;
    margin: 3px 0 0 0;
  }
`;

const SearchInput = styled.input`
  width: 50%;
  padding: 7px 15px;
  border-radius: 16px;
  margin-right: 15px;
`;

const SearchResult = styled.div`
  width: 70%;
  height: 500px;
  margin: 50px 0 0 0;
  padding: 30px 60px;
  background-color: #171b39;
  overflow: scroll;
  scrollbar-width: thin;
  scrollbar-color: #fecb24 #fecb24;
`;

const Loading = styled.div`
  width: 100%;
  font-size: 18px;
`;

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;

const Movie = styled.div`
  background-color: #383a69;
  color: white;
  font-size: 16px;
  text-align: left;

  img {
    width: 100%;
  }
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  padding-bottom: 40px;
`;

const Title = styled.div``;

const Rate = styled.div``;

const MainPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchData, setSearchData] = useState([]);

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
    const delayDebounceTimer = setTimeout(async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${search}`,
        options
      )
        .then((res) => res.json())
        .catch((err) => console.log(err));
      setSearchData(data.results);
      //TODO : 들어맞는 데이터가 없을 때 length==0 이므로 검색어가 없을 때와 동일하게 searchResult가 없어지므로 result가 없을 때의 상황을 따로 구현해야 함!
      //TODO : 처음 웹사이트 들어가면 로딩 중입니다... 라고 뜨는 상황 해결
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(delayDebounceTimer);
  }, [search]);

  function handleInputChange(event) {
    setSearch(event.target.value);
  }

  return (
    <Container>
      <WelcomeBox>
        <h1>환영합니다</h1>
      </WelcomeBox>
      <SearchContainer>
        <h1> 📽️ Find your movies ! </h1>
        <SearchBox>
          <SearchInput onChange={handleInputChange} />
          <IconSearch />
        </SearchBox>
        {searchData.length > 0 ? (
          <SearchResult>
            {isLoading ? (
              <Loading>로딩 중입니다..</Loading>
            ) : (
              <MovieContainer>
                {searchData.map((item) => (
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
                    <img
                      src={"http://image.tmdb.org/t/p/w500/" + item.poster_path}
                    />
                    <Description>
                      <Title>{item.title}</Title>
                      <Rate>⭐️{item.vote_average}</Rate>
                    </Description>
                  </Movie>
                ))}
              </MovieContainer>
            )}
          </SearchResult>
        ) : (
          <></>
        )}
      </SearchContainer>
    </Container>
  );
};

export default MainPage;
