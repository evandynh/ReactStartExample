import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';


const API_KEY = 'AIzaSyBIXbACNY1HpDK0bHoRQo_kZqR8mk8_krE';


// Create a new component. This component should produce html
class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({videos})
      // this.setState({videos:videos}) only works if key and property are the same name
    });
  }
  render () {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's html on put it on the page/DOM
ReactDOM.render(<App />, document.querySelector('.container'));
