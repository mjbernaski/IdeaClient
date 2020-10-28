
import React, { Component } from 'react';
import Sources from './components/sources.jsx';

class App extends Component {
  state = {
    sources: []
  }

  componentDidMount() {
    console.log('App did mount');
    fetch('http://192.168.1.144:3000/sources', {
      method: 'GET'
      })
    .then(res => res.json())
    .then((data) => {
      this.setState({ sources: data })
      console.log('I think I set the state... ')
      console.log(this.state.sources)
    })
    .catch(console.log);
  };

  render() { 
    return (
      <Sources sources={this.state.sources} />
      );
  }
}

export default App;
