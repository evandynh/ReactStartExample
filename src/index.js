import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should produce html
const App = () => {
  return <div>Hi!</div>;
}

// Take this component's html on put it on the page/DOM
ReactDOM.render(<App />, document.querySelector('.container'));
