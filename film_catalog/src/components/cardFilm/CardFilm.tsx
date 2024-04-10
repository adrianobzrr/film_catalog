import { ICardFilm } from "./CardFilm.types";
import  style  from "./CardFilm.module.css";
import { FaStar } from "react-icons/fa";

const CardFilm = ( {movie, handleSelect}: ICardFilm ) => {


    return (
      <div className={style.container} onClick={() => handleSelect(movie.id)}>
        <h2>{movie.title}</h2>
        <img src={movie.poster_path} alt={movie.title}/>
        <p>
          <FaStar/> {movie.vote_average}
        </p>
      </div>
    );
  }

  export default CardFilm