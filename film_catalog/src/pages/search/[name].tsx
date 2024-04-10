import { useEffect, useState } from "react";
import styles from "./search.module.css";
import { getMovies} from "@/services/moviesRequest";
import { IFilm } from "@/types/film.types";
import CardFilm from "@/components/cardFilm/CardFilm";
import { useRouter, useParams } from 'next/navigation'
import {FaArrowLeft } from "react-icons/fa";

const Search = () => {
  const {push, back} = useRouter();
  const param  = useParams();
  const searchName = param?.name;
 
  const [films, setFilms] = useState<IFilm[] | null>();

  useEffect(() => {

    const getSearchMovies = async () => {
      if(searchName){
        const result = await getMovies(searchName);
        setFilms(result);
      }
    }

    getSearchMovies();
  }, [searchName]);

  const handleSelect = (filmId: number) => {
    push(`/movieDetails/${filmId}`);
    console.log(filmId) ;
  };

  return (
    <div className={styles.container}>
      <FaArrowLeft onClick={() => back()} className={styles.homeIcon}/>
      <h2>Resultados para: <span>{searchName}</span></h2>
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

export default Search