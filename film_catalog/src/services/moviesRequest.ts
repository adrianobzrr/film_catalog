import { IFilm} from "@/types/film.types";

const moviesURL = process.env.NEXT_PUBLIC_API_URL
const keyURL = process.env.NEXT_PUBLIC_SECRET_KEY;
const imgURL = process.env.NEXT_PUBLIC_IMG;
const detailsURL = process.env.NEXT_PUBLIC_DETAILS;
const searchURL = process.env.NEXT_PUBLIC_SEARCH;
const languagehURL = process.env.NEXT_PUBLIC__LANGUAGE;

const topRatedUrl = `${moviesURL}?${keyURL}&language=pt-BR`;


export const getPopularMovies = async () => {
    const res = await fetch(topRatedUrl);
    const data = await res.json();

    const movies: IFilm[] = data.results.map((result: IFilm) => ({
        id: result.id,
        title: result.title,
        vote_average: result.vote_average,
        overview: result.overview,
        release_date: result.release_date,
        poster_path: imgURL + result.poster_path,
    }));
    return movies;
};


export const getMoviesDetails = async (id: string) => {
    const urlDetails = `${detailsURL}${id}?${keyURL}&${languagehURL}`;
    const res = await fetch(urlDetails);
    const data = await res.json();

    const movie: IFilm =  {
        id: data.id,
        title: data.title,
        vote_average: data.vote_average,
        overview: data.overview,
        release_date: data.release_date,
        poster_path: imgURL + data.poster_path,
        genres: data.genres,
    };

    return movie;
};

export const getMovies = async (searchName: string) => {
    const urlDetails = `${searchURL}?${keyURL}&query=${searchName}&${languagehURL}`;
    const res = await fetch(urlDetails);
    const data = await res.json();

    const movies: IFilm[] = data.results.map((result: IFilm) => ({
        id: result.id,
        title: result.title,
        vote_average: result.vote_average,
        overview: result.overview,
        release_date: result.release_date,
        poster_path: imgURL + result.poster_path,
    }));

    return movies;
};

