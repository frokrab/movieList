class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: [],
      displayed: [],
      watched: [],
    };
    this.searchHandler = this.searchHandler.bind(this);
    this.addMovieHandler = this.addMovieHandler.bind(this);
  }

  searchHandler(query) {
    var relevantMovies = [];
    this.state.collection.forEach((movie) => {
      if (movie.title.includes(query.toUpperCase())) {
        relevantMovies.push(movie);
      }
    });
    relevantMovies.length === 0 ? relevantMovies.push({title: 'No results matched your search'}) : null;
    this.setState({displayed: relevantMovies});
  }

  addMovieHandler(movieTitle) {
    let includes = false;
    this.state.collection.forEach(function(movie) {
      if (movie.title.toUpperCase() === movieTitle.toUpperCase()) {
        includes = true;
      }
    });
    if (!includes) {
      this.setState({
        collection: this.state.collection.concat([{title: movieTitle}]),
        displayed: [{title: movieTitle}]
      });
    }
  }

  render() {
    return (
      <div>
        <h2 className="page-title">Movie List</h2>
        <Submit addMovieHandler={this.addMovieHandler}/>
        <Search searchHandler={this.searchHandler}/>
        <div>
          <MovieList movies={this.state.displayed} />
        </div>
      </div>
    );
  }
}