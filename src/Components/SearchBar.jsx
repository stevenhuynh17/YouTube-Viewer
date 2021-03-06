import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }


  onInputChange(event) {
    // console.log(event.target.value);
    this.setState({ term: event.target.value});
    this.props.onSearchTermChange(event.target.value);
  }

  render() {
    return (
      <div className="search-bar">
        <input 
          value={this.state.term}
          onChange={this.onInputChange.bind(this)}/>
      </div>
    );
  }
}

export default SearchBar;