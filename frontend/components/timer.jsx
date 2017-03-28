import React from 'react';
import { Link, hashHistory } from 'react-router';


class Timer extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {

    return (
      <div className="timer">
        <h2>1:00</h2>
      </div>
    );
  }

}

export default Timer;
