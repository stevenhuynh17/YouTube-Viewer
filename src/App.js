import React, { Component } from 'react';

import SearchBar from './Components/SearchBar.jsx';
import YTSearch from 'youtube-api-search';
import API_KEY from './config.js';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default App;
