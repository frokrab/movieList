var MovieList = (props) => (
  <div className="list">
    {Object.entries(props.movies).map((movie) => 
      <MovieListEntry key={movie[0]} movieEntry={movie[1]}/>)}
  </div>
);

window.MovieList = MovieList;