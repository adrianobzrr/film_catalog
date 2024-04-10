import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import styles from "./Navbar.module.css"
import { useState } from "react";
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const {push} = useRouter();
  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      if (!search) return;
  
      push(`/search/${search}`);
      setSearch("");
    };

  return(
      <div className={styles.container}>
        <BiCameraMovie className={styles.movieicon}/>
        <h2>Filmes</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Busque um filme"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button type="submit">
            <BiSearchAlt2 />
          </button>
    </form>
      </div>
  )

}

export default Navbar;