import ContactUS from "../pages/ContactUS";

import Movie from "./../pages/Movie";
import MovieDetails from "./../pages/MovieDetails";
import { Route, Routes } from "react-router-dom";
import AboutUS from "./../pages/AboutUS";
import Notfound from "../components/Notfound";
import Layout from "./../components/Layout";
import Register from "./../pages/Register";
const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Movie />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about-us" element={<AboutUS />} />
        <Route path="/favorites" element={<ContactUS />} />
        <Route path="/movie-details/:id" element={<MovieDetails />} />
      </Route>
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default Router;
