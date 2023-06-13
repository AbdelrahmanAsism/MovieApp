import Rating from "./Rating";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMovieFavorites } from "./../store/Slices/favorites";

const MovieCard = (props) => {
  const [isFavorite, SetIsFavorite] = useState(!!props.movie.isFavoite);
  // const favorites = useSelector((state) => state.favorites.movieFavorites);

  const dispatch = useDispatch();
  return (
    <div className=" card-group container ">
      <div className=" w-100">
        <div className="card mb-3 position-relative bg-transparent">
          <Rating movie={props.movie} />
          <img
            src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
            className="card-img-top "
            alt="movie poster"
            style={{ objectFit: "cover" }}
            onClick={() => props.handleOnClick(props.movie)}
          />
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {props.movie.title}
            </h5>
          </div>
          <span
            className=" position-absolute top-0 start-0"
            onClick={() => {
              SetIsFavorite(!isFavorite);
              dispatch(toggleMovieFavorites(props.movie));
            }}
          >
            {isFavorite ? (
              <i className="fa-solid fa-heart text-danger  fa-3x m-2" />
            ) : (
              <i className="fa-regular fa-heart text-danger fa-3x  m-2" />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
