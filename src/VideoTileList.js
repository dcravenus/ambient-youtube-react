import React, { Component } from 'react';
import VideoTile from './VideoTile.js';
import './VideoTileList.css';

class VideoTileList extends Component {

  render() {
    const tiles = this.props.urls.map((url) => <VideoTile url={url} onRemove={this.props.onTileRemove}></VideoTile>);
    return (
      <div className="video-tile-list">
        {tiles}
      </div>

    );
  }
}

export default VideoTileList;
