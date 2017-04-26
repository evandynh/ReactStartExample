import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBIXbACNY1HpDK0bHoRQo_kZqR8mk8_krE';

// Create a new component. This component should produce html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's html on put it on the page/DOM
ReactDOM.render(<App />, document.querySelector('.container'));
