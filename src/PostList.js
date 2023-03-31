import React, { useEffect, useState } from 'react';
import { connectToDatabase } from './db';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const db = await connectToDatabase();
      const posts = await db.collection('posts').find().toArray();
      setPosts(posts);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
