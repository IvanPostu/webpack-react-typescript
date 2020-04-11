import React from 'react';
import { PostModelType } from '@/typescript-react/store/posts';

interface PostPropType {
  post: PostModelType;
}

const Post: React.FC<PostPropType> = ({ post }) => {
  return (
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">{post.title}</span>
        <p>HH{post.text}</p>
      </div>
      <div className="card-action">
        <a href="#">This is a link</a>
      </div>
    </div>
  );
};

export default Post;
