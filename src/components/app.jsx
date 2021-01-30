import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import giphy from 'giphy-api';

import SearchBar from './searchbar.jsx';
import GifList from './giflist.jsx';
import Gif from './gif.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "sZkSgQcVwkpvxqhz9v"
    };
  }

  search = (query) => {
    giphy('a3z7TTCExIZeuVSQeAxcg6JZydVy9c8A').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({ gifs: result.data });
    });
  }

  selectGif = (gifId) => {
    this.setState({ selectedGifId: gifId });
  }


  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif}></GifList>
        </div>
      </div>
    );
  }
}

export default App;
