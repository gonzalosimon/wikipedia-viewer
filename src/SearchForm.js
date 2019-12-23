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
           <div>
             <form onSubmit={this.handleSubmit.bind(this)}>
               <input type='text' placeholder='Search' onChange={this.handleInputChange.bind(this)} value={this.state.searchTerm}/>
             </form>
             <p>visit a <a href="http://en.wikipedia.org/wiki/Special:Random" target="_blank">random article</a></p>
           </div>
    );
  }
}


export default SearchForm;
