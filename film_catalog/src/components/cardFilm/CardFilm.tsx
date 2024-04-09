import { ICardFilm } from "./CardFilm.types";
import  style  from "./CardFilm.module.css";
import { FaStar } from "react-icons/fa";

const CardFilm = ( {movie, handleSelect}: ICardFilm ) => {


    return (
      <div className={style.container} onClick={() => handleSelect(movie.id)}>
        <h2>{movie.title}</h2>
        <img src={movie.img} alt={movie.title}/>
        <p>
          <FaStar/> {movie.average}
        </p>
      </div>
    );
  }

  export default CardFilm