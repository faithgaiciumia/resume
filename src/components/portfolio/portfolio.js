import React, { Component } from "react";
import calc from "./portfolioone.PNG";
import recipe from "./portfoliotwo.PNG";
import quotes from "./tutorialone.PNG";
import writing from "./portfoliothree.jpg";
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="resume">
          {/* Education
----------------------------------------------- */}
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Zalego Institute of Technology </h3>
                  <p className="info">
                    Certificate in Software Development <span>•</span>{" "}
                    <em className="date">August 2016</em>
                  </p>
                  <p>
                    I attended an intense 6-month course where I was introduced
                    to programming in general and further learn on Android
                    mobile app development, USSD and SMS integration, C and C#
                    languages as well as important programming concepts such as
                    data structures and algorithms that have helped me be a
                    better developer with time.
                  </p>
                </div>
              </div>{" "}
              {/* item end */}
              {/* <div className="row item">
                <div className="twelve columns">
                  <h3>School of Cool Designers</h3>
                  <p className="info">
                    B.A. Degree in Graphic Design <span>•</span>{" "}
                    <em className="date">March 2003</em>
                  </p>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum, nec
                    sagittis sem nibh id elit. Duis sed odio sit amet nibh
                    vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                    velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
                    Sed non mauris vitae erat
                  </p>
                </div>
              </div>{" "} */}
              {/* item end */}
            </div>{" "}
            {/* main-col end */}
          </div>{" "}
          {/* End Education */}
          {/* Work
----------------------------------------------- */}
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Projects</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>React-Calculator</h3>
                  <p className="info">
                    {/* Senior UX Designer <span>•</span>{" "}
                    <em className="date">March 2010 - Present</em> */}
                  </p>
                  <p>
                    I created this ReactJS Calculator as part of my practice
                    projects as I learnt React basics. You could check it out{" "}
                    <a href="https://faithgaiciumia.github.io/reactcalculator/">
                      here.
                    </a>{" "}
                    The calculator is also responsive and adjusts appropriately
                    in all screen sizes.
                  </p>
                  <p>
                    <img src={calc} alt="logo" />
                  </p>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>Recipe App</h3>
                  <p className="info">
                    {/* UX Designer <span>•</span>{" "}
                    <em className="date">March 2007 - February 2010</em> */}
                  </p>
                  <p>
                    This is a ReactJs Recipe app whereby the user can search for
                    their favorite recipes, view the recipes and also view
                    random meal recipes. The project is still under development.
                    This is a brief part of the UI. This recipe app uses MealDB
                    API to access the meals and their respective information.
                    The project also utilizes react-bootstrap. You can check out
                    the github repo for this project{" "}
                    <a href="https://github.com/faithgaiciumia/reactrecipe">
                      here
                    </a>
                  </p>
                  <p>
                    <img src={recipe} alt="logo" />
                  </p>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>Javascript Random Quotes Generator</h3>
                  <p className="info">
                    {/* UX Designer <span>•</span>{" "}
                    <em className="date">March 2007 - February 2010</em> */}
                  </p>
                  <p>
                    This is an app which generates and displays a new quote each time the user clicks on the new quote button.You could check out the full app {" "}
                    <a href="https://faithgaiciumia.github.io/Javascript-Random-Quotes-Generator/">
                      here
                    </a>
                  </p>
                  <p>
                    <img src={quotes} alt="quotes" />
                  </p>
                </div>
              </div>
              <div className="row item">
                <div className="twelve columns">
                  <h3>Technical Articles</h3>
                  <p className="info">
                    {/* UX Designer <span>•</span>{" "}
                    <em className="date">March 2007 - February 2010</em> */}
                  </p>
                  <p>
                    Besides building projects, I also enjoy writing articles
                    where I share what I have learnt. I also use these articles
                    as a reminder for key concepts in the different languages,
                    libraries and frameworks I use. So far, I have published
                    three technical articles; two on Medium and the other two
                    Hashnode.
                    <a href="https://medium.com/@faithgaiciumia078/getting-started-with-reactjs-d95dc70dba8?source=your_stories_page---------------------------">
                      Article One
                    </a>
                    ,{" "}
                    <a href="https://medium.com/@faithgaiciumia078/creating-your-first-create-react-app-55fd2d49a740?source=your_stories_page---------------------------">
                      Article two
                    </a>
                    ,{" "}
                    <a href="https://hashnode.com/post/creating-a-simple-website-using-html-ckbfdt3uc01fbcls1lvx5id5e">
                      Article three
                    </a>,{" "}
                    <a href="https://faithgaiciumia.hashnode.dev/creating-a-javascript-random-quote-generator-ckc11geu60002xbs10pqpdwuu">Article four</a>
                    .
                  </p>
                  <p>
                    <img src={writing} alt="writing" />
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* main-col end */}
          </div>{" "}
          {/* End Work */}
          {/* Skills
----------------------------------------------- */}
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>
            <div className="nine columns main-col">              
              <div>
                <ul>
                  <li>
                    <h3>Languages</h3>
                    <ul>
                      <li>CSS3</li>
                      <li>HTML5</li>
                      <li>Javascript</li>
                      <li>ES6</li>
                      <li>Python</li>
                    </ul>
                    </li>
                  <li><h3>Framework</h3></li>
                  <ul>
                    <li>Redux</li>
                    <li>Bootstrap</li>
                    <li>Material-UI</li>
                  </ul>
                  <li><h3>Libraries/APIs</h3></li>
                  <ul>
                    <li>React</li>
                    <li>jQuery</li>
                    <li>Node.js</li>
                    <li>REST APIs</li>
                    <li>ngrx</li>
                    <li>RxJS</li>
                  </ul>
                  <li><h3>Tools</h3></li>
                  <ul>
                    <li>Git</li>
                    <li>Webpack 2</li>
                  </ul>
                  <li><h3>Paradigms</h3></li>
                  <ul>
                    <li>Distributed Programming</li>
                    <li>REST</li>
                    <li>Object-Oriented Design(OOD)</li>
                    <li>Test-Driven Development(TDD)</li>
                    <li>Agile Software Development</li>
                  </ul>
                  <li><h3>Platforms/Other</h3></li>
                  <ul>
                    <li>Visual Studio Code</li>
                    <li>Firebase</li>
                    <li>Windows</li>
                    <li>Responsive Designs</li>
                    <li>Progressive Web Applications(PWA)</li>
                  </ul>
                  <li><h3>Storage</h3></li>
                  <ul>
                    <li>Cloud Firestore</li>
                    <li>MongoDB</li>
                  </ul>
                </ul>

              </div>
              {/* end skill-bars */}
            </div>{" "}
            {/* main-col end */}
          </div>{" "}
          {/* End skills */}
        </section>
        >
      </React.Fragment>
    );
  }
}
