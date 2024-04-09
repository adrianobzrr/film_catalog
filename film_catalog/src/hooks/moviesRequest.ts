import { IFilm } from "@/types/film.types";

const moviesURL = process.env.NEXT_PUBLIC_API_URL
const keyURL = process.env.NEXT_PUBLIC_SECRET_KEY;
const imgURL = process.env.NEXT_PUBLIC_IMG;

const topRatedUrl = `${moviesURL}?${keyURL}`;

export const getTopMovies = async () => {
    const res = await fetch(topRatedUrl);
    const data = await res.json();

    const movies: IFilm[] = data.results.map((result: IFilm) => ({
        id: result.id,
        title: result.title,
        average: result.vote_average,
        overview: result.overview,
        release_date: result.release_date,
        img: imgURL + result.poster_path,
    }));
    return movies;
};