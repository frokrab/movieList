var Search = (props) => (
  <form>
    <input onChange={(event) => props.searchHandler(event.target.value)} type="text"/>
  </form>
);