import React, { Component } from 'react';

import SearchBar from './Components/SearchBar.jsx';
import VideoList from './Components/videoList.jsx';
import YTSearch from 'youtube-api-search';
import API_KEY from './config.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };
    YTSearch({ key: API_KEY, term: 'surfboards' }, videos => {
      this.setState({ videos });
    })
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
