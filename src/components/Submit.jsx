class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  inputHandler(event) {
    this.setState({
      title: event.target.value
    });
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.addMovieHandler(this.state.title);
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input onChange={this.inputHandler} type="text" />
        <button>Add</button>
      </form>
    );
  }

}