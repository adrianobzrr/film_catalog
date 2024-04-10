import { IMovie } from "@/types/movie.types";

export interface ICardFilm {
    movie: IMovie;
    handleSelect: (filmId: number) => void;
  }