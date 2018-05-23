var MovieList = (props) => (
  <div className="list">
    {Object.entries(props.movies).map((movie) => 
      <MovieListEntry clickHandler={props.toggleWatchHandler} key={movie[0]} movieEntry={movie[1]}/>)}
  </div>
);

window.MovieList = MovieList;