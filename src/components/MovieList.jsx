var MovieList = (props) => (
  <div className="list">
    <div className="watched">
      <button className="on" onClick={props.toggleDisplay}>Watched</button>
      <button className="off" onClick={props.toggleDisplay}>Not Watched</button>
      {Object.entries(props.displayed).map((movie) => {
        if (movie[1].watched[0] === props.displayWatched) {
          return <MovieListEntry toggleWatch={props.toggleWatchHandler} key={movie[0]} movieEntry={movie[1]}/>;
        }
      })}
    </div>
  </div>
);

window.MovieList = MovieList;