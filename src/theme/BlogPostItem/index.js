import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client'; // v3.7 import
import Comments from '@site/src/components/Comments';

export default function BlogPostItemWrapper(props) {
  const { metadata, isBlogPostPage } = useBlogPost();
  const { comments = true } = metadata.frontMatter;

  return (
    <>
      <BlogPostItem {...props} />
      {comments && isBlogPostPage && <Comments />}
    </>
  );
}
