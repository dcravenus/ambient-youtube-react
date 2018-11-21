import React, { Component } from 'react';
import VideoTileList from './VideoTileList';
import './App.css'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      urls: [
        "https://www.youtube.com/embed/gpW7iYfuGDU?rel=0&amp;showinfo=0",
        "https://www.youtube.com/embed/XThua40bAss?rel=0&amp;showinfo=0",
        "https://www.youtube.com/embed/lxNXf9fBv0g?rel=0&amp;showinfo=0",
        "https://www.youtube.com/embed/8BVzoEf1tqk?rel=0&amp;showinfo=0",
        ""
      ]
    };

    this.onTileRemove = this.onTileRemove.bind(this);
  }

  onTileRemove(url) {
    let urls = this.state.urls;
    console.log('remove!');
    const index = urls.indexOf(url);
    urls.splice(index, 1);
    this.setState({
      urls: urls
    });
  }

  render() {
    return (
      <div className="App">

        <VideoTileList urls={this.state.urls} onTileRemove={this.onTileRemove}></VideoTileList>

      </div>

    );
  }
}

export default App;
