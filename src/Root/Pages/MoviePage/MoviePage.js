import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Player } from 'video-react';
<<<<<<< HEAD
=======
import Button from '@mui/material/Button';
>>>>>>> b4d8ea51f4b419c1db7d6cf86805d9a7643f5dc9
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
<<<<<<< HEAD
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LocalPlayIcon from '@mui/icons-material/LocalPlay';
import Tooltip from '@mui/material/Tooltip';
=======
>>>>>>> b4d8ea51f4b419c1db7d6cf86805d9a7643f5dc9


export default function MoviePage() {
    const [movies, setMovies] = useState([]);
    const { movieId } = useParams(); // Get the movieId from the URL
    const [loading, setLoading] = useState(true); // Add a loading state

<<<<<<< HEAD
    const theme = createTheme({
        palette: {
            primary: {
                light: '#ffffff',
                main: '#fff',
                dark: '#fff',
                contrastText: '#fff',
            },
            secondary: {
                light: '#ff7961',
                main: '#f44336',
                dark: '#ba000d',
                contrastText: '#000',
            },
        },
    });

=======
>>>>>>> b4d8ea51f4b419c1db7d6cf86805d9a7643f5dc9
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
<<<<<<< HEAD
            <div className="bg-local p-6 md:p-24" style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="bg-zinc-900 p-6 md:p-24 shadow-2xl rounded-[25px]">
                    <div className="grid grid-cols-1 md:grid grid-cols-2 gap-4 p-24 text-white">
=======
            <div className="bg-local p-24" style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="bg-zinc-900 p-24 shadow-2xl rounded-[25px]">
                    <div className="grid grid-cols-2 gap-4 p-24 text-white">
>>>>>>> b4d8ea51f4b419c1db7d6cf86805d9a7643f5dc9
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
<<<<<<< HEAD
        <>
            <div
                className="flex flex-col gap-4 justify-top h-screen bg-slate-300">
                <div className="pt-8">
                    <div className="bg-zinc-50 w-5/6 pt-5 pb-5 mx-auto min-h-80 shadow-lg rounded-[25px]" >
                        <div className="bg-zinc-50 w-5/6 mx-auto min-h-80 rounded-bl-[25px] rounded-tl-[25px] rounded-tr-[25px] bg-cover bg-center"  style={{ backgroundImage: `url(${movie.MovieBig})`, backgroundColor: '#000' }}>
                        </div>
                        <div className="relative w-5/6 mx-auto grid grid-cols-3 gap-4">
                                <div>
                                <img src={movie.moviePic} alt={movie.movieTitle} className="contain p-1 shadow-2xl rounded-lg absolute h-24 -top-12 left-4 md:h-48"/>
                                </div>
                                <div>Text Aici</div>
                                <div>Play Button</div>

                            </div>
                    </div>
                </div>
            </div>
        </>
=======
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
>>>>>>> b4d8ea51f4b419c1db7d6cf86805d9a7643f5dc9
    );
}