import React from 'react';
import './App.css';
import $ from 'jquery';
import SearchForm from './SearchForm';
import ResultList from './ResultList';

class Wikipedia extends React.Component {

  constructor() {
      super();
      this.state = {
          results: [
              '', [], [], []
          ]
      };
  }

  handleSearch(searchTerm) {
      $.ajax({
          type: 'GET',
          url: 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + searchTerm,
          jsonpCallback: 'jsonCallback',
          contentType: "application/json",
          dataType: 'jsonp',
          success: (data) => {
              this.setState({ results: data });
          },
          error: (error) => {
              console.error(error);
          }
      });
  }

  render() {
      return(
          <div>
            <h1>Wikipedia Viewer</h1>
             <SearchForm onSearch={this.handleSearch.bind(this)}/>
             <ResultList results={this.state.results}/>      
          </div>
    );
  }
}

export default Wikipedia;
