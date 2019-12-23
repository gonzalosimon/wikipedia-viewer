import React from 'react';
import './App.css';

class SearchForm extends React.Component {
      constructor() {
            super();
            this.state = {
              searchTerm: ''
            };
        }
    
        handleInputChange(event) {
            this.setState({
                searchTerm: event.target.value
            });
        }
    
      handleSubmit(event) {
            event.preventDefault();
            let searchTerm = this.state.searchTerm.trim(); // Removes whitespace 
    
            if (!searchTerm) { 
                return;
            }
    
            this.props.onSearch(searchTerm); 
            this.setState({ searchTerm: '' });
        }
      render(){
        return ( 
           <div className="search-box-container">
             <form onSubmit={this.handleSubmit.bind(this)}>
               <input className="box" type='text' placeholder='Search' onChange={this.handleInputChange.bind(this)} value={this.state.searchTerm}/>
             </form>
             <a href="http://en.wikipedia.org/wiki/Special:Random" target="_blank"><i class="fa fa-random fa-2x" aria-hidden="true"></i></a>
           </div>
    );
  }
}


export default SearchForm;
