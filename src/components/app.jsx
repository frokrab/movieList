var App = (props) => (
  <div>
    <h2 className="page-title">Movie List</h2>
    <Search />
    <div>
      <MovieList movies={movies} />
    </div>
  </div>
);