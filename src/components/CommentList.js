import React, { useState } from 'react';
import Comment from './Comment.js';

const Comments = ({ comments }) => {
  const [liveComments, setLiveComments] = useState(comments);

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

  return (
    <div>
      <h3>{liveComments.length} Comments</h3>
      <ol className="Comments" style={{ listStyle: 'none' }}>
        {liveComments.map(({ comment, user, id }) => {
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
