import React, { Component } from "react";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import BitcoinRate from "./components/bitcoinRate";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <BitcoinRate />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
