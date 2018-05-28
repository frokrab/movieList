class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: window.movies,
      displayed: {},
      displayWatched: false
    };
    this.searchHandler = this.searchHandler.bind(this);
    this.addMovieHandler = this.addMovieHandler.bind(this);
    this.toggleWatchHandler = this.toggleWatchHandler.bind(this);
    this.toggleDisplayWatched = this.toggleDisplayWatched.bind(this);
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
      currentCollection[movieTitleKey] = {
        title: movieTitle,
        watched: false,
      };
      this.setState({
        collection: currentCollection,
        displayed: {movieTitleKey: {
          title: movieTitle,
          watched: false,
        }}
      });
    }
  }

  toggleWatchHandler(movieTitle) {
    let movieTitleKey = movieTitle.toUpperCase();
    let currentCollection = this.state.collection;
    currentCollection[movieTitleKey].watched[0] = !currentCollection[movieTitleKey].watched[0];
    if (currentCollection[movieTitleKey].watched[0]) {
      currentCollection[movieTitleKey].watched[1] = 'Watched';
    } else {
      currentCollection[movieTitleKey].watched[1] = 'Not Watched';
    }
    this.setState({collection: currentCollection});
  }

  toggleDisplayWatched(event) {
    if (event.target.className ==='on') {
      this.setState({
        displayWatched: true
      });
    } else if (event.target.className === 'off') {
      this.setState({
        displayWatched: false
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
          <MovieList toggleDisplay={this.toggleDisplayWatched} toggleWatchHandler={this.toggleWatchHandler} displayed={this.state.displayed} displayWatched={this.state.displayWatched}/>
        </div>
      </div>
    );
  }  
}