var MovieListEntry = (props) => (
  <div className="list-entry">
    {props.movieEntry.title}
    <button onClick={(event) => props.clickHandler(props.movieEntry.title)} ></button>
  </div>
);
