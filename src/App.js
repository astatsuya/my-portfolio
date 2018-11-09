import React  from 'react';
import './App.css';
import Headder from './components/headder';
import Main from './components/main';
import Footer from './components/footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Headder />
        <Main />
        App
        <Footer />
      </div>
    );
  }
}

export default App;
