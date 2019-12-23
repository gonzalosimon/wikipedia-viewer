import React from 'react';
import './App.css';

class SingleResult extends React.Component {
      render() {
          return (
              <a className="single-result" href={this.props.url} target="_blank">
                  <div>
                      <h3>{this.props.title}</h3>
                      <p>{this.props.description}</p>
                  </div>
              </a>
        )
      }
    }

class ResultList extends React.Component {
    render() {
        var results = this.props.results[1].map((result, index) => {
            return (
                <SingleResult key={index} title={this.props.results[1][index]} description={this.props.results[2][index]} url={this.props.results[3][index]}/>
            );
        });

      return (
       <div className="result-list" >{results}</div>
    );
  }
}

export default ResultList;
