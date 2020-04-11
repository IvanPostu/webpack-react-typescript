import { postReducer } from '@/typescript-react/store/posts/PostReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  allPosts: postReducer,
});

export default rootReducer;
