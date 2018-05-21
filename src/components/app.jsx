class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: [],
      displayed: []
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

  addMovieHandler(title) {
    console.log('collecion item: ', this.state.collection[0]);
    console.log('added movie: ', {title: title.toUpperCase()});
    console.log('includes?: ', this.state.collection.includes({title: title.toUpperCase()}));
    if (!this.state.collection.includes({title: title.toUpperCase()})) {
      this.setState({
        collection: this.state.collection.concat([{title: title.toUpperCase()}]),
        displayed: [{title: title.toUpperCase()}]
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