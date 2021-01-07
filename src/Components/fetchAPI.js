import React from "react";
import $ from "jquery";
import "../App.css";
import { Search, OutcomeList } from "./Modules.js";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      results: ["", [], []],
    };
  }
  handleSearch(searchTerm) {
    $.ajax({
      type: "GET",
      url:
        "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + searchTerm,
      jsonpCallback: "jsonCallback",
      contentType: "application/json",
      dataType: "jsonp",
      success: (data) => {
        this.setState({ results: data });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  render() {
    return (
      <div>
        <Search onSearch={this.handleSearch.bind(this)} />
        <OutcomeList results={this.state.results} />
      </div>
    );
  }
}

export default Home;
