import React, { useState } from 'react';
import Comment from './Comment';

const Post = ({ post, addComment, currentUser }) => {
  const [commentContent, setCommentContent] = useState('');

  const handleAddComment = () => {
    const newComment = {
      id: Date.now(),
      user: currentUser,
      content: commentContent
    };
    addComment(post.id, newComment);
    setCommentContent('');
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold">{post.user}</h2>
      <p className="mt-2">{post.content}</p>
      <div className="mt-4">
        {post.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
      <div className="mt-4">
        <input
          type="text"
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
          placeholder="Add a comment..."
          className="bg-gray-700 text-white p-2 rounded w-full"
        />
        <button
          onClick={handleAddComment}
          className="bg-blue-600 text-white py-1 px-4 rounded mt-2"
        >
          Comment
        </button>
      </div>
    </div>
  );
};

export default Post;