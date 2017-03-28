import React from 'react';
import { Link } from 'react-router';
import Header from './header';

const App = ({ children }) => (
  <div className="wrapper">
    <Header />
    <div id="content" >
      { children }
    </div>
  </div>
);

export default App;
