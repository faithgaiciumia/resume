import React, { Component } from "react";
import Header from "./components/header/header";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";

import resumeData from "./resumeData";
import Footer from "./components/footer/footer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}
export default App;
