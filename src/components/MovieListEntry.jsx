class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false
    };
    this.toggleInfo = this.toggleInfo.bind(this);
  }

  toggleInfo(event) {
    this.setState({
      showInfo: !this.state.showInfo
    });
  }

  render() {
    if (this.state.showInfo) {
      return (
        <div className="list-entry" onClick={this.toggleInfo}>
          Title: {this.props.movieEntry.title}<br />
          Year: {this.props.movieEntry.year}<br />
          Overview: {this.props.movieEntry.overview}<br />
          <button onClick={(event) => this.props.toggleWatch(this.props.movieEntry.title)}></button>
          {this.props.movieEntry.watched[1]}
        </div>
      );
    } else {
      return (
        <div className="list-entry" onClick={this.toggleInfo}>
          Title: {this.props.movieEntry.title}<br />
          <button onClick={(event) => this.props.toggleWatch(this.props.movieEntry.title)}></button>
          {this.props.movieEntry.watched[1]}
        </div>
      );
    }
  }
}
