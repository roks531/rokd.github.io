// src/components/RecentPost.js
import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import { useLatestBlog } from '@docusaurus/plugin-content-blog/lib/client';

const RecentPost = () => {
  const [recentPost, setRecentPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the latest blog post using Docusaurus plugin hook
        const latestBlogPost = useLatestBlog();

        // Extract necessary information from the latest blog post
        const data = {
          title: latestBlogPost.title,
          permalink: latestBlogPost.permalink,
          description: latestBlogPost.description,
        };

        setRecentPost(data);
      } catch (error) {
        console.error('Error fetching recent post:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {recentPost && (
        <div>
          <h2>Most Recent Post</h2>
          <Link to={recentPost.permalink}>{recentPost.title}</Link>
          <p>{recentPost.description}</p>
        </div>
      )}
    </div>
  );
};

export default RecentPost;
