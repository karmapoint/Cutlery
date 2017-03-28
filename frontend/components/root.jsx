
import React from 'react';
import { Provider } from 'react-redux';
// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// react components
import App from './app';

const Root = () => {
  return (
    <App />
  );
};

export default Root;
