import React, { useState } from 'react';

const CommunityForm = ({ addPost, currentUser }) => {
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    const newPost = {
      id: Date.now(),
      user: currentUser,
      content: content,
      comments: []
    };
    addPost(newPost);
    setContent('');
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Create a Post</h2>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Share your thoughts..."
        className="bg-gray-700 text-white p-4 rounded w-full h-24"
      ></textarea>
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white py-2 px-4 rounded mt-4"
      >
        Post
      </button>
    </div>
  );
};

export default CommunityForm;
