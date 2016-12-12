import React, { Component } from 'react';

import SearchBar from './Components/SearchBar.jsx';
import VideoList from './Components/videoList.jsx';
import VideoDetail from './Components/videoDetail.jsx';
import YTSearch from 'youtube-api-search';
import API_KEY from './config.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    YTSearch({ key: API_KEY, term: 'surfboards' }, videos => {
      this.setState({
        videos: videos, 
        selectedVideo: videos[0]
      });
    })
  }


  
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
          videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
