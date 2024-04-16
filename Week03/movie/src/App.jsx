import react from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./component/MainPage";
import "./App.css";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import PopularPage from "./component/PopularPage";
import NowPlayingPage from "./component/NowPlayingPage";
import TopRatedPage from "./component/TopRatedPage";
import UpComing from "./component/UpComing";
import MovieDetailPage from "./component/MovieDetailPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/popular" element={<PopularPage />}></Route>
        <Route path="/nowplaying" element={<NowPlayingPage />}></Route>
        <Route path="/toprated" element={<TopRatedPage />}></Route>
        <Route path="/upcoming" element={<UpComing />}></Route>
        <Route path="/detail" element={<MovieDetailPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
