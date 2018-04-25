import React, { Component } from "react";
//import logo from '../logo.svg';
import "./App.css";

import AnnotationView from "./AnnotationView/AnnotationView";

class App extends Component {
    render() {
        return (
            <div className="App">
                <AnnotationView animal_id={2} activity="insemination" />
            </div>
        );
    }
}

export default App;
