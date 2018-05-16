class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: window.movies
    }
  }

  render() {
    return(
      <div>
        <h2 className="page-title">Movie List</h2>
        <Search />
        <div>
          <MovieList movies={this.state.collection} />
        </div>
      </div>
    );
  }
}