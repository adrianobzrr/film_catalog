'use client';
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { getPopularMovies } from "@/services/moviesRequest";
import { IFilm } from "@/types/film.types";
import CardFilm from "@/components/cardFilm/CardFilm";
import { useRouter } from 'next/navigation'
import Navbar from "@/components/Navbar/Navbar";



export default function Home() {

  const {push} = useRouter();
  const [films, setFilms] = useState<IFilm[] | null>();

  useEffect(() => {
    const getMovies = async () => {
      const result = await getPopularMovies();
      setFilms(result);
    }

    getMovies();
  }, []);

  const handleSelect = (filmId: number) => {
    push(`/movieDetails/${filmId}`);
    console.log(filmId) ;
  };
  return (
    <div className={styles.container}>
      <Navbar/>
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
