import React from 'react';

const Comment = ({ comment }) => (
  <div className="mt-2 bg-gray-700 p-2 rounded">
    <p className="text-sm font-bold">{comment.user}</p>
    <p className="text-sm">{comment.content}</p>
  </div>
);

export default Comment;
