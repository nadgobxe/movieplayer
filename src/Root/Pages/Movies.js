// Assuming this is in Movies.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Movies() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/movies')
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error("There was an error!", error));
    }, []);

    return (
        <div className="container bg-gray-300">
            {movies.map(movie => (
                <div key={movie.movieId}>
                    <h2>{movie.movieTitle}</h2>
                    <img src={movie.moviePic} alt={movie.movieTitle}  className="object-fill h-48 w-96" />
                    <p>{movie.MovieSubtitle}</p>
                    <Link to={`/movies/${movie.movieId}`}>View Details</Link>
                </div>
            ))}
        </div>
    );
}
