
        
        <div className="bg-local p-24" style={{ backgroundImage: `url(${movie.MovieBig})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="bg-zinc-900 p-24 shadow-2xl rounded-[25px]">
            <div className="grid grid-cols-2 gap-4 p-24 text-white">
                <div className="col-span-2 mb-4 flex items-center gap-2">
                    <h2 className="text-4xl uppercase">{movie.movieTitle}</h2>
                    <span className="text-xl">({movie.movieYear})</span>
                </div>
                <div className="col-span-2 grid grid-cols-4 gap-4">
                    <div className="shadow-2xl rounded-[25px]"><img src={movie.moviePic} alt={movie.movieTitle} className="contain h-96" /></div>
                    <div className="col-span-3 grid grid-cols-3 gap-4">
                        <div className="col-span-3 flex flex-row items-start gap-4">
                            <div>{movie.movieGenre}</div>
                            <div>|</div>
                            <div className="flex items-center">
                                {movie.movieRating && (
                                    <>
                                        <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/171_Imdb_logo_logos-512.png" alt="IMDb Logo" className="w-5 h-5" />
                                        <span className="ml-1">{movie.movieRating}</span>
                                    </>
                                )}
                            </div>
                            <div>|</div>
                            <div
                            >{movie.movieActors}</div>
                        </div>
                        <div className="col-span-3"><p>{movie.movieDescription}</p></div>
                        <div className="col-span-3">
                            <ThemeProvider theme={theme}>
                                <Tooltip title="Play Trailer">
                                    <IconButton aria-label="play trailer" className="bg-white">
                                        <LocalPlayIcon  sx={{ color: '#fff',  fontSize: 40, transition: "transform 0.4s ease", '&:hover': { color: 'green.300', transform: "scale(1.5)"} }} />
                                    </IconButton>
                                </Tooltip>

                                <Tooltip title="Add an Alarm">
                                    <IconButton aria-label="add an alarm" >
                                        <AlarmIcon sx={{ color: '#fff',  fontSize: 40, transition: "transform 0.4s ease", '&:hover': { color: 'green.300', transform: "scale(1.5)"} }} />
                                    </IconButton>
                                </Tooltip>
                            </ThemeProvider>
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