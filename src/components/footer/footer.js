import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer>
          <div className="row">
            <p>© Copyright faithGaiciumia 2020</p>
            <div id="go-top">
              <a className="smoothscroll" title="Back to Top" href="#home">
                <i className="icon-up-open" />
              </a>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
