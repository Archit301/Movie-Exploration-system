import React, { useState, useEffect } from 'react';
import Post from './Post';
import CommunityForm from './CommunityForm';

const Community = ({ currentUser }) => {
  const [posts, setPosts] = useState([]);

  // Load posts from local storage on component mount
  useEffect(() => {
    const savedPosts = localStorage.getItem('communityPosts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  // Save posts to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('communityPosts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const addComment = (postId, newComment) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return { ...post, comments: [...post.comments, newComment] };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Community</h1>
      <CommunityForm addPost={addPost} currentUser={currentUser} />
      <div className="space-y-8">
        {posts.map(post => (
          <Post key={post.id} post={post} addComment={addComment} currentUser={currentUser} />
        ))}
      </div>
    </div>
  );
};

export default Community;

