import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Movies() {
  const navigate = useNavigate();
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=226d319d74c14fef096faf81d3fd3d79"
      )
      .then((res) => setMovieList(res.data.results))
      .catch((error) => console.log(error));
  }, []);
  const handleOnClick = (movie) => {
    navigate(`/movie-details/${movie.id}`, {});
  };
  // let the key to be id
  return (
    <div className=" row my-4  ">
      {movieList.map((movie, i) => {
        return (
          <div className="col-3 my-3 " key={i}>
            <MovieCard
              movie={movie}
              handleOnClick={(movie) => handleOnClick(movie)}
            />
            {/* <Rating movie={movie} className=" " /> */}
          </div>
        );
      })}
    </div>
  );
}
