import React, { Component } from "react";
import styles from "../css/footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="page-footer font-small">
        <div className="footer-copyright text-center py-3">
          © 2018 Copyright: Dalia Krungleviciute,{" "}
          <a href="http://akademija.it/" target="_blank">
            {" "}
            Akademija.IT
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
