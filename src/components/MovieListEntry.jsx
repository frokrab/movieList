var MovieListEntry = (props) => (
  <div>
    <div className="list-entry">{props.movie.title}</div>
    <button>Not watched</button>
  </div>
);