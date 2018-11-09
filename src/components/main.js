import React from 'react';
import Skills from './skills';
import Works from './works';
import AboutMe from './aboutme';

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <Skills />
        <Works />
        <AboutMe />
      </div>
    );
  }
}

export default Main;
