class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: {},
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
    axios({
      url: `https://api.themoviedb.org/3/search/movie?api_key=${window.TMDB_API_KEY}&language=en-US&include_adult=false&query=${movieTitle}`
    })
      .then(response => {
        let titleKey = response.data.results[0].title.toUpperCase();
        if (!this.state.collection[titleKey]) {
          let currentCollection = this.state.collection;
          currentCollection[titleKey] = {
            title: response.data.results[0].title,
            year: response.data.results[0].release_date.slice(0, 4),
            overview: response.data.results[0].overview,
            watched: [false, 'Not Watched']
          };
          this.setState({
            collection: currentCollection,
            displayed: {title: currentCollection[titleKey]}
          });
        }
      });
  }

  toggleWatchHandler(movieTitle) {
    let titleKey = movieTitle.toUpperCase();
    let currentCollection = this.state.collection;
    currentCollection[titleKey].watched[0] = !currentCollection[titleKey].watched[0];
    if (currentCollection[titleKey].watched[0]) {
      currentCollection[titleKey].watched[1] = 'Watched';
    } else {
      currentCollection[titleKey].watched[1] = 'Not Watched';
    }
    this.setState({collection: currentCollection});
  }

  toggleDisplayWatched(event) {
    if (event.target.className === 'on') {
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