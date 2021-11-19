import Comment from './Comment.js';

const Comments = ({ comments }) => {
  return (
    <div>
      <h3>{comments.length} Comments</h3>
      <ol className="Comments" style={{ listStyle: 'none' }}>
        {comments.map(({ comment, user, id }) => {
          return <Comment key={id} comment={comment} user={user} />;
        })}
      </ol>
    </div>
  );
};

export default Comments;
