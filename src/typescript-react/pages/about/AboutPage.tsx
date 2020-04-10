import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

const AboutPage = () => {
  const history = useHistory();
  return (
    <Fragment>
      <h2>About page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt recusandae eveniet tempore dolore ipsa sunt
        iste temporibus corporis laborum earum.
      </p>
      <button onClick={() => history.push('/')} className="btn">
        Back to homepage
      </button>
    </Fragment>
  );
};

export default AboutPage;
