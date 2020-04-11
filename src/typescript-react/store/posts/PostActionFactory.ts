import { CreatePost, PostModelType } from '@/typescript-react/store/posts';
import { PostModel } from '@/typescript-react/store/posts/PostModel';

import { AllActionTypes } from '@/typescript-react/store/posts/PostActionTypes';
import { Dispatch } from 'redux';
import Post from '@/typescript-react/components/post/Post';

export function createPost(post: PostModelType): CreatePost {
  return {
    type: AllActionTypes.CREATE_POST,
    payload: post,
  };
}

export function fetchPosts() {
  interface IResponse {
    id: number;
    title: string;
    body: string;
  }

  return async (dispatch: Dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const json: Array<IResponse> = await response.json();

    const asyncPosts: Array<PostModelType> = json.reduce((acc, item) => {
      const post: PostModelType = new PostModel(item.id, item.body, item.title);
      acc.push(post);
      return acc;
    }, new Array<PostModelType>());

    dispatch({ type: AllActionTypes.FETCH_POSTS, payload: asyncPosts });
  };
}
