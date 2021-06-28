import React, { useState, useEffect } from "react";

import CONST from "./data/constants";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const { URL, APISTRING } = CONST;

  const [ movies, setMovies ] = useState<any>();
  const [ series, setSeries ] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {

      const movies = await fetch(`${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`);
      const moviesData = await movies.json();
      setMovies(moviesData);

      const series = await fetch(`${URL}/discover/tv${APISTRING}&sort_by=popularity.desc`);
      const seriesData = await series.json();
      setSeries(seriesData)
    };

    fetchData();
  }, []);

  // useEffect(() => movies && console.log(movies), [ movies ])

  const getFeaturedMovie = () => movies && movies?.results[0];

  const getMovieList = () => {
    if (movies) {
      const [ featured, ...movieList ] = movies?.results;
      return movieList;
    }
    return [];
  }

  return (
    <div className="m-auto antialised font-sans bg-black text-white">
      <Hero {...getFeaturedMovie()} />
      <Navbar />
      <Carousel title="Filmes populares" data={getMovieList} />
      <Carousel title="Séries populares" data={series?.results}/>
      <Carousel title="Placeholder"/>
    </div>
  );
};

export default App;
