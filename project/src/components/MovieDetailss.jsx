import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function MovieDetailss() {
  const [movieDetails, setMovieDetails] = useState({});
  const params = useParams();
  const base_url = "https://image.tmdb.org/t/p/w500/";
  //spin loader *** in details and movies
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=226d319d74c14fef096faf81d3fd3d79`
      )
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={`${base_url}${movieDetails.poster_path}`}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{movieDetails.title}</h5>
            <p className="card-text">{movieDetails.overview}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                Release date : {movieDetails.release_date}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
