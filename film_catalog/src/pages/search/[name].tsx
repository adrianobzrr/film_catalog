import { useEffect, useState } from "react";
import styles from "./search.module.css";
import { getMovies} from "@/services/moviesRequest";
import { IMovie } from "@/types/movie.types";
import CardFilm from "@/components/cardMovie/CardMovie";
import { useRouter, useParams } from 'next/navigation'
import {FaArrowLeft } from "react-icons/fa";

const Search = () => {

  const {push, back} = useRouter();
  const param  = useParams();
  const searchName = param?.name;
 
  const [movie, setMovie] = useState<IMovie[] | null>();

  useEffect(() => {

    const getSearchMovies = async () => {
      if(searchName){
        const result = await getMovies(searchName);
        setMovie(result);
      }
    }

    getSearchMovies();

  }, [searchName]);

  const handleSelect = (filmId: number) => {
    push(`/movieDetails/${filmId}`);
  };

  return (
    <div className={styles.container}>
      <FaArrowLeft onClick={() => back()} className={styles.homeIcon}/>
      <h2>Resultados para: <span>{searchName}</span></h2>
      <div className={styles.cardsContainer}>
        {movie && 
          movie.map((film: IMovie) => (
            <CardFilm movie={film} key={film.id} handleSelect={handleSelect}/>
          ))
        }
      </div>
      
    </div>
  );
}

export default Search