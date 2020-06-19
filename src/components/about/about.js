import React, { Component } from "react";
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/profilepic.jpg" alt="" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>
                I am a passionate front-end web developer who has worked on different stacks before but moved permanently to web development an year ago. I have worked with mobile application development and did not find it as satisfying as web development. Hence settling on my new found love; web development. I love developing web applications and using these techniques to solve simple problems. 
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
                    {/* <span>anyone@website.com</span> */}
                  </p>
                </div>
                <div className="columns download">
                  {/* <p>
                    <a href="#" className="button">
                      <i className="fa fa-download" />
                      Download Resume
                    </a>
                  </p> */}
                </div>
              </div>{" "}
              {/* end row */}
            </div>{" "}
            {/* end .main-col */}
          </div>
        </section>
      </React.Fragment>
    );
  }
}
