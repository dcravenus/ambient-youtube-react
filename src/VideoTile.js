import React, { Component } from 'react';
import './VideoTile.css';

class VideoTile extends Component {
  constructor(props) {
    super(props);

    this.handleRemoveButtonClick = this.handleRemoveButtonClick.bind(this);
  }

  handleRemoveButtonClick() {
    this.props.onRemove(this.props.url);
  }

  render() {
    let template = (
      <div className="video-tile">
        <div>
          <button className="remove-button" type="button" onClick={this.handleRemoveButtonClick}>&#x274c;</button>
        </div>
        <iframe width="400" height="300" frameborder="0" allowfullscreen src={this.props.url}></iframe>
      </div>
    );

    return template;
  }
}

export default VideoTile;
