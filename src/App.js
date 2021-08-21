import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchurl={requests.fetchOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchurl={requests.fetchTrending} />
      <Row title="Top Rated" fetchurl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchurl={requests.fetchAction} />
      <Row title="Comedy Movies" fetchurl={requests.fetchComedy} />
      <Row title="Horror Movies" fetchurl={requests.fetchHorror} />
      <Row title="Romance Movies" fetchurl={requests.fetchRomance} />
      <Row title="Documentaries" fetchurl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
