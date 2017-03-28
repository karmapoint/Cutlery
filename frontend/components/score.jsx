import React from 'react';
import { Link, hashHistory } from 'react-router';


class Score extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {

    return (
      <div className="score">
        <h2>Score: 0</h2>
      </div>
    );
  }

}

export default Score;
