import React from 'react';
import { Link, hashHistory } from 'react-router';
import Timer from "./timer";
import Score from "./score";
import NavLinks from "./nav_links";


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {

    return (
      <header className="topbar">
        <img src="../../assets/images/cutlery_logo_topbar.png" className="logo" />
        <Timer />
        <Score />
        <NavLinks />
      </header>
    );
  }

}

export default Header;
