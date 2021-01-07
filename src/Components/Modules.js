import React from "react";
import "../App.css";

class Outcome extends React.Component {
  render() {
    return (
      <a className="outcome" href={this.props.url}>
        <div>
          <h3>{this.props.title}</h3>
        </div>
      </a>
    );
  }
}

class OutcomeList extends React.Component {
  render() {
    const results = this.props.results[1].map((result, index) => {
      return (
        <Outcome
          key={index}
          title={this.props.results[1][index]}
          url={this.props.results[3][index]}
        />
      );
    });

    return <div>{results}</div>;
  }
}

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
    };
  }

  handleInputChange(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let searchTerm = this.state.searchTerm.trim();
    this.props.onSearch(searchTerm);
    this.setState({ searchTerm: "" });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            className="box"
            type="text"
            placeholder="Search"
            onChange={this.handleInputChange.bind(this)}
            value={this.state.searchTerm}
          />
        </form>
        <a href="http://en.wikipedia.org/wiki/Special:Random">
          <i className="fa fa-random fa-2x"></i>
        </a>
      </div>
    );
  }
}

export { Search, OutcomeList };
