import React, { Component } from "react";
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>
                I am a developer currently perfecting my skills on Front-End Web
                Development and looking forward to moving into Full-Stack Web
                Development. I started general programming 4 years ago. I
                started out with Native Android Programming. I later on moved to
                creation of Hybrid Mobile Applications with Flutter and Ionic.
              </p>
              <p>
                During my interaction with Ionic, I used Typescript which was
                much familiar with Javascript. After some research, I decided to
                shift to Web Development. I started by learning simple HTML,CSS
                and Javascript then moved on to ReactJS.
              </p>
              <p>
                So far, I am conversant with implementing UI Designs and wiring
                them up using either Vanilla Javascript or ReactJS. I am also
                able to communicate with the backend through RestAPIs. I am
                currently learning on how to implement FullStack projects with
                MERN stack.(MongoDB, ExpressJS, ReactJS and Node.).
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Faith Gaiciumia</span>
                    <br />
                    <span>
                      faithgaiciumia078@gmail.com
                      <br />
                      2050-0400 Nairobi, Kenya
                    </span>
                    <br />
                    <span>(+254)791084892</span>
                    <br />
                  </p>
                </div>
                <div className="columns download"></div>
              </div>{" "}
            </div>{" "}
          </div>
        </section>
      </React.Fragment>
    );
  }
}
