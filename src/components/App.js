import React, { useState } from 'react';
import video from '../data/video.js';
import CommentList from './CommentList.js';
import VotingButtons from './VotingButtons.js';
import { Button, Typography } from '@material-ui/core';

function App() {
  console.log("Here's your data:", video);
  let [isHidden, setIsHidden] = useState(false);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Typography variant="h5" component="h1" className="title">
        {video.title}
      </Typography>
      <Typography variant="subtitle2" component="small">
        {`${video.views} Views | Uploaded ${video.createdAt}`}
      </Typography>
      <br />
      <VotingButtons
        upvotes={video.upvotes}
        downvotes={video.downvotes}
        isHidden={isHidden}
        setIsHidden={setIsHidden}
      />
      <Button
        className="hideComments"
        type="button"
        color="primary"
        variant="outlined"
        onClick={() => setIsHidden(!isHidden)}
      >
        {isHidden === true ? 'Show' : 'Hide'} Comments
      </Button>
      <hr />

      {!isHidden && <CommentList comments={video.comments} />}
    </div>
  );
}

export default App;
