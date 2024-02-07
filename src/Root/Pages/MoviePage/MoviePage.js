import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Player } from 'video-react';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import Tooltip from '@mui/material/Tooltip';
import { fetchData } from './MovieObject'


export default function MoviePage() {
    const [movies, setMovies] = useState([]);
    const { movieId } = useParams(); // Get the movieId from the URL
    const [loading, setLoading] = useState(true); // Add a loading state

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
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1536,
                gfold: 280, // Custom breakpoint
                a51: 412, // S Galaxy A51 breakpoint
            },
        },
    });

    useEffect(() => {
        fetchData(setMovies, setLoading)
    }, [setMovies, setLoading]);

    // Use .find to get the single movie that matches the movieId
    const movie = movies.find(movie => movie.movieId === movieId);

    if (loading) {
        return (
            <div className="bg-local p-6 md:p-24" style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="bg-zinc-900 p-6 md:p-24 shadow-2xl rounded-[25px]">
                    <div className="grid grid-cols-1 md:grid grid-cols-2 gap-4 p-24 text-white">
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
        return <div>Movie not found
  

        </div>; // Handle case where movie is not found
    }

    // Display movie details or a loading message

    return (
        <>
            <div
                className="flex flex-col gap-4 justify-top h- pb-10 bg-slate-300">
                <div className="pt-8">
                    <div className="bg-zinc-50 w-5/6 pt-5 pb-5 mx-auto min-h-80 shadow-lg rounded-[25px]" >
                        <div className="bg-zinc-50 w-5/6 mx-auto min-h-[45vh] rounded-bl-[25px] rounded-tl-[25px] rounded-tr-[25px] bg-cover bg-center md:h-[60vh] md:bg-no-repeat md:bg-transparent md:bg-fixed" style={{ backgroundImage: `url(${movie.MovieBig})`, backgroundColor: '#000' }}>

                        </div>
                        <div className="relative w-5/6 mx-auto grid grid-cols-3 gap-4 xl:w-4/6 xl:gap-1 xl-:grid-cols-6">
                            <div>
                                <img src={movie.moviePic} alt={movie.movieTitle} className="contain p-1 shadow-2xl rounded-lg absolute h-[15vh] -top-12 left-4 gfold:-top-6 md:h-48 ise:h-[11vh] i12pro:h-[12vh] s8:h-[13vh] surduo:h-[14vh] gfold:h-[10vh] a51:h-[10vh]" />
                            </div>
                            <div className="flex flex-col gap-1 md:text-3xl md:font-semibold gfold:text-xs a51:text-lg">
                                <div>{movie.movieTitle}</div>
                                <div className="flex items-center">
                                    <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/171_Imdb_logo_logos-512.png" alt="IMDb Logo" className="ise:w-5 ise:h-5 w-3 h-4 md:w-8 md:h-8" />
                                    <span className="ml-1">{movie.movieRating}</span>
                                </div>


                            </div>
                            <div>
                                <ThemeProvider theme={theme}>
                                    <Tooltip title="Play Movie">
                                        <IconButton aria-label="play trailer" className="bg-white relative">
                                            <PlayCircleFilledIcon className="p-1 shadow-2xl absolute -top-9 gfold:-top-6 -right-10 bg-white rounded-full md:-right-10" sx={{
                                                color: '#b91c1c',
                                                fontSize: 60,
                                                [theme.breakpoints.up('md')]: { // This applies styles for screens that are medium or larger

                                                    transition: "transform 0.4s ease",
                                                    '&:hover': {
                                                        color: 'green.300',
                                                        transform: "scale(1.5)"
                                                    },
                                                },
                                                [theme.breakpoints.up('gfold')]: {
                                                    fontSize: 40,
                                                },
                                                [theme.breakpoints.up('a51')]: {
                                                    fontSize: 60,
                                                }
                                            }} />
                                        </IconButton>
                                    </Tooltip>
                                </ThemeProvider>
                            </div>

                        </div>
                        <div className="w-5/6 mx-auto grid grid-cols-2 gap-4 pt-10 md:mt-16 md:text-xl">
                            <div>Length: {movie.movieLength}</div>
                            <div>Sub Available: {movie.movieSub}</div>
                            <div className="col-span-2">{movie.movieGenre}</div>
                            <div className="col-span-2">{movie.movieActors}</div>
                            <div className="col-span-2">{movie.movieDescription}</div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}