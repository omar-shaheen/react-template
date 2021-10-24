import React, { Component } from "react";

import Home from "./../Home/index";
import About from "./../About/index";
import Footer from "./../Footer/index";
import Portfolio from "./../Portfolio/index";
import Profile from "./../Profile/index";
import SocailMedia from "./../SocailMedia/index";
import Work from "./../Work/index";

class Index extends Component {
  render() {
    return (
      <div className="">
        <Home />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <SocailMedia />
        <Footer />
      </div>
    );
  }
}

export default Index;
