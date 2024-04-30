import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./page/MainPage";
import "./App.css";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import PopularPage from "./page/PopularPage";
import NowPlayingPage from "./page/NowPlayingPage";
import TopRatedPage from "./page/TopRatedPage";
import UpComingPage from "./page/UpComingPage";
import MovieDetailPage from "./page/MovieDetailPage";
import NotFoundPage from "./page/NotFoundPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<MainPage />}></Route>
        <Route exact path="/popular" element={<PopularPage />}></Route>
        <Route exact path="/nowplaying" element={<NowPlayingPage />}></Route>
        <Route exact path="/toprated" element={<TopRatedPage />}></Route>
        <Route exact path="/upcoming" element={<UpComingPage />}></Route>
        <Route exact path="/detail" element={<MovieDetailPage />}></Route>
        <Route exact path="/detail/:id" element={<MovieDetailPage />}></Route>
        <Route exact path="*" element={<NotFoundPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
