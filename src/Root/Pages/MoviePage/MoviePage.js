import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Player } from 'video-react';

export default function MoviePage() {
    const [movies, setMovies] = useState([]);
    const { movieId } = useParams(); // Get the movieId from the URL

    useEffect(() => {
        fetch('http://localhost:3000/movies')
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error("There was an error!", error));
    }, []);

    // Use .find to get the single movie that matches the movieId
    const movie = movies.find(movie => movie.movieId === movieId);

    // Display movie details or a loading message
    return (
        <div className="bg-local p-48" style={{ backgroundImage: `url(${movie.MovieBig})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="bg-zinc-900 p-48 shadow-2xl rounded-[25px]">
                <div className="grid grid-cols-2 gap-4 p-24 text-white">
                    <div className="col-span-2 mb-4">
                        <h2 className="text-4xl">{movie.movieTitle}</h2>
                    </div>
                    <div className="col-span-2 grid grid-cols-4 gap-4">
                        <div className="shadow-2xl"><img src={movie.moviePic} alt={movie.movieTitle} className="contain h-96 rounded-[25px]" /></div>
                        <div className="col-span-3 grid grid-cols-3 gap-4">
                            <div className="col-span-3 flex flex-row items-start gap-4">
                                <div>{movie.movieGenre}</div>
                                <div className="flex items-center">
                                    {movie.movieYear && (
                                        <>
                                            <span className="mx-2">|</span>
                                            <span>{movie.movieYear}</span>
                                        </>
                                    )}
                                </div>
                                <div className="flex items-center">
                                    {movie.movieRating && (
                                        <>
                                            <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/171_Imdb_logo_logos-512.png" alt="IMDb Logo" className="w-5 h-5" />
                                            <span className="ml-1">{movie.movieRating}</span>
                                        </>
                                    )}
                                </div>
                                <div className="ml-4">{movie.movieActors}</div>
                            </div>
                            <div className="col-span-3"><p>{movie.movieDescription}</p></div>
                            <div className="col-span-3"><p>{movie.movieDescription}</p></div>
                        </div>
                    </div>
                    <p>{movie.MovieSubtitle}</p>
                    <Player
                        playsInline
                        poster={movie.moviePic}
                        src={movie.MovieUrl}
                        controls={true}
                    />
                </div>
            </div>
        </div>
    );
}