
import React, { Component} from "react";
import "./App.css";
import PlanesFilter from "./components/planesFilter";
import PlanesLists from "./components/planesList";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>I must lean Redux!</h1>
        <PlanesFilter />
        <PlanesLists />
      </div>
    );
  }
}

export default App;