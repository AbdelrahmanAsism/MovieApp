import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const favorites = useSelector((state) => state.favorites.movieFavorites);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            AlexFlix
          </Link>

          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ "--bs-scroll-height": "100px" }}
            >
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Movies
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about-us"
                >
                  About US
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/favorites">
                  <div className=" position-relative">
                    favorites
                    {favorites.length > 0 ? (
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {favorites.length}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </Link>
              </li>
              <li className="nav-item  end-0 position-absolute">
                <Link
                  style={{ marginLeft: "20rem" }}
                  className="nav-link"
                  to="/register"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
