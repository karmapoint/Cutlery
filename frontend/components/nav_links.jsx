import React from 'react';
import { Link, hashHistory } from 'react-router';


class NavLinks extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {

    return (
    <ul className="nav_links">
      <li>New Game</li>
      <li>Tutorial</li>
      <li>About</li>
    </ul>
    );
  }

}

export default NavLinks;
