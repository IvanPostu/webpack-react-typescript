import { Reducer } from 'redux';
import { PostActionType, PostsStateType, PostModelType } from '@/typescript-react/store/posts';
import { AllActionTypes } from '@/typescript-react/store/posts/PostActionTypes';

const initialState: PostsStateType = {
  posts: new Array<PostModelType>(),
  fetchedPosts: new Array<PostModelType>(),
};

const reducer: Reducer<PostsStateType, PostActionType> = (
  state: PostsStateType = initialState,
  action: PostActionType,
): PostsStateType => {
  switch (action.type) {
    case AllActionTypes.CREATE_POST: {
      const newArray: Array<PostModelType> = [...state.posts];
      newArray.push(action.payload as PostModelType);
      return { ...state, posts: newArray };
    }
    case AllActionTypes.FETCH_POSTS: {
      const newArr: Array<PostModelType> = action.payload as Array<PostModelType>;
      return { ...state, fetchedPosts: newArr };
    }
    default: {
      return state;
    }
  }
};

export { reducer as postReducer };
