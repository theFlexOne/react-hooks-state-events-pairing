import { Typography } from '@material-ui/core';

const Comment = ({ user, comment }) => {
  return (
    <li>
      <Typography variant="body1" component="h2">
        {user}
      </Typography>
      <Typography variant="body2">{comment}</Typography>
    </li>
  );
};

export default Comment;
