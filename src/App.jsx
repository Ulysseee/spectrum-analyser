import React from "react";
import Canvas from './components/Canvas.jsx';
import Screenshot from "./components/Screenshot.jsx";

import './App.scss';


const App = () => {

  return (
    <div className="App">
      <Screenshot />
      <Canvas />
    </div>
  );
}

export default App;
