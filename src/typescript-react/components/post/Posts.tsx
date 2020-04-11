import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '@/typescript-react/store/posts/PostActionFactory';

import Post from '@/typescript-react/components/post/Post';
import { PostModelType } from '@/typescript-react/store/posts';
import { AppStateType } from '@/typescript-react/store';

type StateToPropsType = {
  syncPosts: Array<PostModelType>;
  asyncPosts: Array<PostModelType>;
};
const mapStateToProps = (state: AppStateType): StateToPropsType => {
  return {
    syncPosts: state.allPosts.posts,
    asyncPosts: state.allPosts.fetchedPosts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchPosts }, dispatch);
};

type PropType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const Posts: React.FC<PropType> = ({ syncPosts, asyncPosts, fetchPosts }) => {
  const syncPostsIsEmpty = syncPosts.length === 0;
  const asyncPostsIsEmpty = asyncPosts.length === 0;

  return (
    <Fragment>
      <div className="col s6">
        <h3>Syncronous posts</h3>
        {syncPostsIsEmpty && <p className="center">Posts is not found!!!</p>}
        {!syncPostsIsEmpty &&
          syncPosts.map((item, index) => {
            return <Post post={item} key={index} />;
          })}
      </div>
      <div className="col s6">
        <h3>Asyncronous posts</h3>
        {asyncPostsIsEmpty && (
          <button onClick={() => fetchPosts()} className="waves-effect waves-light btn">
            Load posts
          </button>
        )}
        {!asyncPostsIsEmpty &&
          asyncPosts.map((item, index) => {
            return <Post post={item} key={index} />;
          })}
      </div>
    </Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
