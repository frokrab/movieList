class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    let query = this.state.query;
    this.props.searchHandler(query);
  }

  inputHandler(event) {
    this.setState({
      query: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input onChange={this.inputHandler} type="text"/>
        <button>Search</button>
      </form>
    );
  }
}