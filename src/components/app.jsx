class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: window.movies
    };
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(query) {
    var relevantMovies = [];
    window.movies.forEach((movie) => {
      if (movie.title.toLowerCase().includes(query.toLowerCase())) {
        relevantMovies.push(movie);
      }
    });
    relevantMovies.length === 0 ? relevantMovies.push({title: 'No results matched your search'}) : null;
    this.setState({collection: relevantMovies});
  }

  render() {
    return (
      <div>
        <h2 className="page-title">Movie List</h2>
        <Search searchHandler={this.searchHandler}/>
        <div>
          <MovieList movies={this.state.collection} />
        </div>
      </div>
    );
  }
}