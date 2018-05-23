var MovieListEntry = (props) => (
  <div className="list-entry">
    {props.movieEntry.title}
    <button className="watched">Not watched</button>
  </div>
);
