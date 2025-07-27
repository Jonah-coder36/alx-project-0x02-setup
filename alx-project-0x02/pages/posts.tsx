import React from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type PostProps } from '@/interfaces';

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div>
      <Header />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>
        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            content={post.content}
            userId={post.userId}
          />
        ))}
      </div>
    </div>
  );
};
export default PostsPage;
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  // Format posts to match PostProps
  const posts: PostProps[] = data.map((post: any) => ({
    title: post.title,
    content: post.body,
    userId: post.userId,
  }));

  return {
    props: {
      posts,
    },
  };
}
