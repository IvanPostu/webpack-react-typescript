import React from 'react';
import { PostModel } from '@/typescript-react/store/posts/PostModel';
import { PostModelType } from '@/typescript-react/store/posts';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createPost } from '@/typescript-react/store/posts/PostActionFactory';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createPost }, dispatch);
};
type DispatchProps = ReturnType<typeof mapDispatchToProps>;

type StateType = {
  title: string;
  text: string;
};

class PostForm extends React.PureComponent<DispatchProps, StateType> {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
    };
  }

  submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const model: PostModelType = new PostModel(Date.now(), this.state.title, this.state.text);
    this.props.createPost(model);
    this.setState({
      title: '',
      text: '',
    });
  };

  changeInputHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.persist();
    this.setState(
      (prev: StateType): StateType => ({
        ...prev,
        ...{
          text: event.target.name === 'text' ? event.target.value : prev.text,
          title: event.target.name === 'title' ? event.target.value : prev.title,
        },
      }),
    );
  };

  render() {
    return (
      <form onSubmit={this.submitHandler} className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input
              value={this.state.title}
              onChange={this.changeInputHandler}
              name="title"
              id="post_input_title_id"
              type="text"
              data-length="20"
              autoComplete="off"
            />
            <label htmlFor="post_input_title_id">Input title</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <textarea
              value={this.state.text}
              onChange={this.changeInputHandler}
              name="text"
              id="post_input_text_id"
              className="materialize-textarea"
              data-length="120"
              autoComplete="off"
            ></textarea>
            <label htmlFor="post_input_text_id">Textarea</label>
          </div>
        </div>
        <div className="row">
          <button className="btn waves-effect waves-light" type="submit">
            Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
      </form>
    );
  }
}

export default connect(null, mapDispatchToProps)(PostForm);
