var MovieList = (props) => (
  <div className="list">
    <div className="watched">
      <h3>Watched</h3>
      {Object.entries(props.displayed).map((movie) => {
        if (movie[1].watched) {
          return <MovieListEntry clickHandler={props.toggleWatchHandler} key={movie[0]} movieEntry={movie[1]}/>;
        }
      })}
    </div>
    <div className="notWatched">
      <h3>Not Watched</h3>
      {Object.entries(props.displayed).map((movie) => {
        if (!movie[1].watched) {
          return <MovieListEntry clickHandler={props.toggleWatchHandler} key={movie[0]} movieEntry={movie[1]}/>;
        }
      })}
    </div>
  </div>
);

window.MovieList = MovieList;