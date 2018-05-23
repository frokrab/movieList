var MovieListEntry = (props) => (
  <div className="list-entry">
    {props.movieEntry.title}
    <button className="watched" onClick={(event) => props.clickHandler(props.movieEntry.title)} >Not watched</button>
  </div>
);
