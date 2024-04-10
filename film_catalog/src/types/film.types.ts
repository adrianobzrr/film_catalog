export interface IFilm {
    id: number;
    title: string;
    vote_average: number;
    overview: string;
    release_date: string;
    poster_path: string;
    genres: IGenre[];
  }

  export interface IGenre {
    id: number;
    name: string;
  }