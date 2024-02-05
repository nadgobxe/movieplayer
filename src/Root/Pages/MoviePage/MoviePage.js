import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Player } from 'video-react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';


export default function MoviePage() {
    const [movies, setMovies] = useState([]);
    const { movieId } = useParams(); // Get the movieId from the URL
    const [loading, setLoading] = useState(true); // Add a loading state

    useEffect(() => {
        fetch('http://localhost:3000/movies')
            .then(response => response.json())
            .then(data => {
                setMovies(data);
                setLoading(false); // Set loading to false once the data is loaded
            })
            .catch(error => {
                console.error("There was an error!", error);
                setLoading(false); // Also set loading to false in case of an error
            });

        // const fetchData = async () => {
        //     await new Promise(resolve => setTimeout(resolve, 3000)); // 3-second delay
        //     fetch('http://localhost:3000/movies')
        //         .then(response => response.json())
        //         .then(data => setMovies(data))
        //         .catch(error => console.error("There was an error!", error));
        // };

        // fetchData();

    }, [setMovies, setLoading]);

    // Use .find to get the single movie that matches the movieId
    const movie = movies.find(movie => movie.movieId === movieId);

    if (loading) {
        return (
            <div className="bg-local p-24" style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="bg-zinc-900 p-24 shadow-2xl rounded-[25px]">
                    <div className="grid grid-cols-2 gap-4 p-24 text-white">
                        <Stack spacing={2} alignItems="flex-start">
                            {/* Movie Title */}
                            <Skeleton variant="text" width={300} height={60} />

                            {/* Movie Rating, Genre, Year */}
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Skeleton variant="text" width={100} height={30} />
                                <Skeleton variant="text" width={60} height={30} />
                                <Skeleton variant="text" width={50} height={30} />
                            </Stack>

                            {/* Movie Poster */}
                            <Skeleton variant="rectangular" width={210} height={300} />

                            {/* Movie Description */}
                            <Skeleton variant="text" width="80%" height={90} />

                            {/* Buttons */}
                            <Stack direction="row" spacing={2}>
                                <Skeleton variant="rectangular" width={120} height={40} />
                                <Skeleton variant="circular" width={40} height={40} />
                            </Stack>

                            {/* Video Player Placeholder */}
                            <Skeleton variant="rectangular" width="100%" height={400} />
                        </Stack>
                    </div>
                </div>
            </div>
        );
    }
    // Check if the movie is defined
    if (!movie) {
        return <div>Movie not found</div>; // Handle case where movie is not found
    }

    // Display movie details or a loading message

    return (
        <div className="bg-local p-24" style={{ backgroundImage: `url(${movie.MovieBig})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="bg-zinc-900 p-24 shadow-2xl rounded-[25px]">
                <div className="grid grid-cols-2 gap-4 p-24 text-white">
                    <div className="col-span-2 mb-4">
                        <h2 className="text-4xl">{movie.movieTitle}</h2>
                    </div>
                    <div className="col-span-2 grid grid-cols-4 gap-4">
                        <div className="shadow-2xl rounded-[25px]"><img src={movie.moviePic} alt={movie.movieTitle} className="contain h-96" /></div>
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
                            <div className="col-span-3"> <Button variant="contained">Hello world</Button>
                                <IconButton aria-label="add an alarm">
                                    <AlarmIcon className="text-white hover:text-green-300" />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3"><p>{movie.MovieSubtitle}</p></div>
                    <div className="col-span-3"><Player
                        playsInline
                        poster={movie.moviePic}
                        src={movie.MovieUrl}
                        controls={true}
                    /></div>
                </div>
            </div>
        </div>
    );
}