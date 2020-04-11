import React, { Fragment } from 'react';
import Posts from '@/typescript-react/components/post/Posts';
import PostForm from '@/typescript-react/components/post/PostForm';

const PostsPage = () => {
  return (
    <Fragment>
      <div className="row">
        <PostForm />
      </div>
      <div className="row">
        <Posts />
      </div>
    </Fragment>
  );
};

export default PostsPage;
