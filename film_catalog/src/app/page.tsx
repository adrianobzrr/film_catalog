'use client';
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { getPopularMovies } from "@/services/moviesRequest";
import { IMovie } from "@/types/movie.types";
import CardMovie from "@/components/cardMovie/CardMovie";
import { useRouter } from 'next/navigation'
import Navbar from "@/components/Navbar/Navbar";



export default function Home() {

  const {push} = useRouter();
  const [moviesList, setMoviesList] = useState<IMovie[] | null>();

  useEffect(() => {
    const getMovies = async () => {
      const result = await getPopularMovies();
      setMoviesList(result);
    }
    getMovies();
  }, []);

  const handleSelect = (filmId: number) => {
    push(`/movieDetails/${filmId}`);
  };

  return (
    <main>
      <div className={styles.container}>
        <Navbar/>
        <div className={styles.cardsContainer}>
          {moviesList && 
            moviesList.map((movie: IMovie) => (
              <CardMovie movie={movie} key={movie.id} handleSelect={handleSelect}/>
            ))
          }
        </div>
      </div>
    </main>
  );
}
