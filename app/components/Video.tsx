import React from 'react';
import YouTube from 'react-youtube';

export default class YoutubeVideo extends React.Component {
  render() {
    const opts = {
      height: '100%',
      width: '100%',

      playerVars: {
        autoplay: 1,
      },
    };

    return (
      <div>
        <h3>GeeksforGeeks - Youtube</h3>
        <YouTube
          videoId='sTnm5jvjgjM'
          opts={opts}
          onReady={this._onReady}
          className='youtubeContainer'
        />
      </div>
    );
  }

  _onReady(event: any) {
    event.target.pauseVideo();
  }
}
