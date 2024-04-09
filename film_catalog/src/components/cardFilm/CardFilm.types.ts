import { IFilm } from "@/types/film.types";

export interface ICardFilm {
    movie: IFilm;
    handleSelect: (filmId: number) => void;
  }