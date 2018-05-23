class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: {},
      displayed: {},
      watched: {}
    };
    this.searchHandler = this.searchHandler.bind(this);
    this.addMovieHandler = this.addMovieHandler.bind(this);
    this.toggleWatchHandler = this.toggleWatchHandler.bind(this);
  }

  searchHandler(query) {
    let relevantMovies = {};
    for (let key in this.state.collection) {
      if (key.includes(query.toUpperCase())) {
        relevantMovies[key] = this.state.collection[key];
      }
    }
    Object.entries(relevantMovies).length === 0 ? relevantMovies[query] = {title: 'No results matched your search'} : null;
    this.setState({displayed: relevantMovies});
  }

  addMovieHandler(movieTitle) {
    let movieTitleKey = movieTitle.toUpperCase();
    if (!this.state.collection[movieTitleKey]) {
      let currentCollection = this.state.collection;
      currentCollection[movieTitleKey] = {title: movieTitle};
      this.setState({
        collection: currentCollection
      });
    }
  }

  toggleWatchHandler(movieTitle) {
    let movieTitleKey = movieTitle.toUpperCase();
    let watchedList = this.state.watched;
    if (!this.state.watched[movieTitleKey]) {
      watchedList[movieTitleKey] = {title: movieTitle};
    } else {
      delete watchedList[movieTitleKey];
    }
    this.setState({watched: watchedList});
  }

  render() {
    return (
      <div>
        <h2 className="page-title">Movie List</h2>
        <Submit addMovieHandler={this.addMovieHandler}/>
        <Search searchHandler={this.searchHandler}/>
        <div>
          <MovieList toggleWatchHandler={this.toggleWatchHandler} movies={this.state.displayed} />
        </div>
      </div>
    );
  }
}