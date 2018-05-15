var MovieList = (props) => (
  <div>
    {props.movies.map((movie) => 
    <MovieListEntry movie={movie} />)}
  </div>
);

window.MovieList = MovieList;