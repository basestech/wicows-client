import React, { Component } from 'react';
import logo from '../logo.svg';
//import logo from '../logo.svg';
import './App.css';

import AnimalHeader from '../components/AnimalHeader/AnimalHeader';
import AnnotationView from './AnnotationView/AnnotationView';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <AnnotationView />
      </div>
    );
  }
}

export default App;
