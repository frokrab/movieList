var MovieList = (props) => (
  <div>
    {props.movies.map((movie, index) => 
      <MovieListEntry movie={movie} key={index}/>)}
  </div>
);

window.MovieList = MovieList;