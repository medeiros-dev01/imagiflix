import cover1 from "../assests/movie1.jpg";
import cover2 from "../assests/movie2.jpg";
import cover3 from "../assests/movie3.jpg";

export interface Movie {
  title: string;
  cover: string;
  score?: number | string;
}

const mockData: Movie[] = [
  {
    title: "Avengers",
    cover: cover1,
  },
  {
    title: "Missão Impossível",
    cover: cover2,
  },
  {
    title: "Megatubarão",
    cover: cover3,
  },
  {
    title: "Avengers",
    cover: cover1,
  },
  {
    title: "Missão Impossível",
    cover: cover2,
  },
  {
    title: "Megatubarão",
    cover: cover3,
  },
  {
    title: "Avengers",
    cover: cover1,
  },
  {
    title: "Missão Impossível",
    cover: cover2,
  },
  {
    title: "Megatubarão",
    cover: cover3,
  },
];

export default mockData;
