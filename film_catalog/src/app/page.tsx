'use client';
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { getTopMovies } from "@/hooks/moviesRequest";
import { IFilm } from "@/types/film.types";
import CardFilm from "@/components/cardFilm/CardFilm";
import { useRouter } from 'next/navigation'



export default function Home() {

  const router = useRouter();
  const [films, setFilms] = useState<IFilm[] | null>();

  useEffect(() => {
    const getMovies = async () => {
      const result = await getTopMovies();
      setFilms(result);
    }

    getMovies();
  }, []);

  const handleSelect = (filmId: number) => {
    router.push(`/movieDetails`);
    console.log(filmId) ;
  };

  return (
    <div className={styles.container}>
      <h2>Filmes</h2>
      <div className={styles.cardsContainer}>
        {films && 
          films.map((film: IFilm) => (
            <CardFilm movie={film} key={film.id} handleSelect={handleSelect}/>
          ))
        }
      </div>
      
    </div>
  );
}
