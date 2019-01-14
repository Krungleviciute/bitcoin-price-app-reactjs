import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faBitcoin } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

class NavBar extends Component {
  state = {
    isOpen: false
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
    const menuClass = `collapse${this.state.isOpen ? " show" : ""}`;
    return (
      <div className="pos-f-t" onClick={this.toggleOpen}>
        <div className={menuClass} id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h4 className="text-white text-align-left">
              <FontAwesomeIcon icon={["fab", "bitcoin"]} /> Bitcoin
            </h4>
            <span className="text-muted">
              "Bitcoin is a tecnological tour de force", - Bill Gates
            </span>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </nav>
      </div>
    );
  }
}

export default NavBar;
