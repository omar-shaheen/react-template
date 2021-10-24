import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/index";
import Contact from "./Components/Contact/index";
import Index from "./Components/Index/index";

class App extends Component {
  render() {
    return (
      <Router>

        <div className="">
          <Navbar />
          <Route path="/" exact component={Index} />
          <Route path="/contact" component={Contact} />
        </div>

      </Router>
    );
  }
}

export default App;
