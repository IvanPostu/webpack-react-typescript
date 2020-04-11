import { PostModel } from './PostModel';

type GenericAction<T> = {
  type: string;
  payload: T;
};

/*
 * Default type for Post object
 */
export type PostModelType = PostModel;

/*
 * Type for posts state in store.
 */
export type PostsStateType = {
  posts: Array<PostModelType>;
  fetchedPosts: Array<PostModelType>;
};

/*
 * Situation when one post is created use default action type @type string
 * and payload @type IPostType
 */
export type CreatePost = GenericAction<PostModelType>;

/*
 * Situation when posts is fetched, use default action type @type string
 * and payload @type Array<IPostType>
 */
export type FetchPosts = GenericAction<Array<PostModelType>>;

/*
 * Combined all action type
 */
export type PostActionType = CreatePost | FetchPosts;
