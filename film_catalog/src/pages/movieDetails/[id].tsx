import { getMoviesDetails } from "@/services/moviesRequest";
import { IFilm, IGenre } from "@/types/film.types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import style from "./movieDetails.module.css"
import { FaStar, FaArrowLeft } from "react-icons/fa";

const UserEdit = () => {

    const {query, back} = useRouter();

    const userId = query.id;

    const [film, setFilm] = useState<IFilm | undefined>();

    useEffect(() => {
        const getMovies = async () => {
            if(userId){
            const result = await getMoviesDetails(userId);
            setFilm(result);
        }
      }
  
      getMovies();
    }, [userId]);

    const formatData = (dataString: string | undefined) => {
      if(dataString){
        const data = new Date(dataString);
        const dia = data.getDate().toString().padStart(2, '0');
        const mes = (data.getMonth() + 1).toString().padStart(2, '0');
        const ano = data.getFullYear();
        return `${dia}-${mes}-${ano}`;
      }else{
        return "";
      }
    }

    const formatGenres = (genres: IGenre[] | undefined) => {
      if(genres){
        const nomes = genres.map(objeto => objeto.name);
        return nomes.join(', ');
      }else{
        return "";
      }
    }

  
      return (
        <div className={style.container}>
          <FaArrowLeft onClick={() => back()} className={style.homeIcon}/>
          
          {film === undefined ? (
            <h2>Crregando...</h2>
          ):(
            <div className={style.movieDetails}>
              <h2>{film?.title}</h2>
              <div className={style.movieGroupInfo}>
                <img src={film?.poster_path} alt={film?.title} />
                <div className={style.movieGroupInfoTexts}>
                  <p>{film?.overview}</p>
                  <p>
                    <strong>Lançamento:</strong> {formatData(film?.release_date)} 
                  </p>
                  <p><strong>Generos:</strong> {formatGenres(film?.genres)}</p>
                  <p className={style.starSvg}>
                    <FaStar/> {film?.vote_average}
                  </p>
                </div>
              </div>
            </div>
          )}
          
        </div>
      );
    }
  
    export default UserEdit