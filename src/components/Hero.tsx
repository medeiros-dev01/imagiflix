import React from "react";

import CONST from '../data/constants';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";

import Score from "./Score";

import placeholder from "../assests/hero.jpg";

const Hero = ({ backdrop_path = null, title = "Avengers Endgame", vote_avarage = 10 }) => {
  const { IMAGEURL } = CONST;

  return(
  <header className="box-border relative min-h-screen -mb-32">
    <img
      className="object-cover object-center h-auto w-full"
      src={backdrop_path ? `${IMAGEURL}/original/${backdrop_path}` : placeholder}
      alt="Filme em destaque"
    />
    <div className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-b from-transparent to-black"></div>
    <article className="absolute bottom-0 mb-64 px-8">
      <p className="text-3xl">Assista agora:</p>
      <h2 className="text-6xl font-bold">{title}</h2>
      <p className="text-base">
        Nota{' '} 
        <Score value={vote_avarage} />
      </p>

      <button className="text-base py-2 px-8 mr-2 mt-8 rounded bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-75 hover:text-black ">
        <FontAwesomeIcon icon={faPlay} className="mr-2" />
        Assistir
      </button>
      <button className="text-base py-2 px-8 mr-2 mt-8 rounded bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-75 hover:text-black ">
        <FontAwesomeIcon icon={faPlus} className="mr-2" />
        Minha Lista
      </button>
    </article>
  </header>
)
};

export default Hero;
