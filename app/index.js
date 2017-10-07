const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');
const App = require('./components/Apps');
 
ReactDOM.render(
  <App />,
  document.getElementById('app')
);