import { Button, Typography, ButtonGroup } from '@material-ui/core';
import React, { useState } from 'react';
// import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';

const Comment = ({ user, comment, onDeletingComment, id }) => {
  let [upvotes, setUpvotes] = useState(0);
  let [downvotes, setDownvotes] = useState(0);

  const deleteComment = e => {
    if (e.target.className !== 'MuiButton-label') return;
    const id = e.currentTarget.id;
    console.log(id);
    onDeletingComment(id);
  };

  return (
    <li id={id} onClick={deleteComment}>
      <Typography variant="body1" component="h2">
        {user}
      </Typography>
      <Typography variant="body2">{comment}</Typography>
      <ButtonGroup>
        <Button
          className="upvote-comment"
          onClick={() => setUpvotes(++upvotes)}
        >
          {upvotes} &#128077;
        </Button>
        <Button
          className="downvote-comment"
          onClick={() => setDownvotes(++downvotes)}
        >
          {downvotes} &#128078;
        </Button>
      </ButtonGroup>
      <Button className="delete">&#10060;</Button>
    </li>
  );
};

export default Comment;
