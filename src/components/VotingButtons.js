import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import React, { useState } from 'react';

const VotingButtons = ({ upvotes, downvotes }) => {
  let [liveUpvotes, setLiveUpvotes] = useState(upvotes);
  let [liveDownvotes, setLiveDownvotes] = useState(downvotes);

  const handleUpvote = e => {
    setLiveUpvotes(++liveUpvotes);
  };
  const handleDownvote = e => {
    setLiveDownvotes(--liveDownvotes);
  };

  return (
    <ButtonGroup className="VotingButtons">
      <Button
        className="upvote"
        type="button"
        color="secondary"
        variant="outlined"
        onClick={handleUpvote}
      >
        {liveUpvotes} &#128077;
      </Button>
      <Button
        className="downvote"
        type="button"
        color="secondary"
        variant="outlined"
        onClick={handleDownvote}
      >
        {liveDownvotes} &#128078;
      </Button>
    </ButtonGroup>
  );
};

export default VotingButtons;
