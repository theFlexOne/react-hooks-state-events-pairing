import React, { useState } from 'react';
import Comment from './Comment.js';

const Comments = ({ comments }) => {
  const [liveComments, setLiveComments] = useState(comments);
  const [userSearch, setUserSearch] = useState('');

  const handleDeletingComment = id => {
    setLiveComments(
      liveComments.filter(comment => {
        if (comment.id === +id) {
          return false;
        }
        return true;
      })
    );
  };

  const handleCommentSearch = e => {
    setUserSearch(e.target.value);
    setLiveComments(
      liveComments.filter(comment => {
        if (userSearch === '') return true;
        if (comment.user.includes(userSearch)) return true;
        return false;
      })
    );
  };

  const commentsToDisplay = [...liveComments];

  return (
    <div>
      <input type="search" value={userSearch} onChange={handleCommentSearch} />
      <h3>{commentsToDisplay.length} Comments</h3>
      <ol className="Comments" style={{ listStyle: 'none' }}>
        {commentsToDisplay.map(({ comment, user, id }) => {
          return (
            <Comment
              id={id}
              key={id}
              comment={comment}
              user={user}
              onDeletingComment={handleDeletingComment}
            />
          );
        })}
      </ol>
    </div>
  );
};

export default Comments;
