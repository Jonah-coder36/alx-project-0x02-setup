import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';
import PostModal from '../components/common/PostModal';

interface Post {
  title: string;
  content: string;
}

const HomePage = () => {
  const [posts, setPosts] = useState<Post[]>([
    { title: 'Welcome!', content: 'This is the first card on the home page.' },
    { title: 'Features', content: 'Our app provides great features.' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (newPost: Post) => {
    setPosts((prev) => [...prev, newPost]);
  };

  return (
    <div>
      <Header />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Home Page</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-6 px-4 py-2 bg-green-600 text-white rounded"
        >
          + Add Post
        </button>
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </div>
    </div>
  );
};

export default HomePage;
