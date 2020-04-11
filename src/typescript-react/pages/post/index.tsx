import React, { Suspense } from 'react';

const PostsPage = React.lazy(() => import('./PostsPage'));

const Posts: React.FunctionComponent = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <PostsPage />
  </Suspense>
);

export default Posts;
