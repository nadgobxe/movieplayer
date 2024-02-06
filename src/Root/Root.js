import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import ErrorPage from "./ErrorPage"
import MoviePage from "./Pages/MoviePage/MoviePage";

export default function Root() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/:movieId" element={<MoviePage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    )
}