import React, { Component } from "react";
import calc from "./portfolioone.PNG";
import recipe from "./portfoliotwo.PNG";
import quotes from "./tutorialone.PNG";
import writing from "./portfoliothree.jpg";
import movieapp from "./portfoliofour.PNG";
import imagegallery from "./portfoliofive.PNG";
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
              <hr />
              <div className="row item">
                <div className="twelve columns">
                  <h3>FreeCodeCamp </h3>
                  <p className="info">
                    Certificate in Javascript Data Structures and Algorithms{" "}
                    <span>•</span> <em className="date">August 2020</em>
                  </p>
                  <p>
                    I decided to take the Javascript module as well as the Web
                    Responsive and HTML module on FreeCodeCamp. This was to help
                    me expand my knowledge on Web Design and Front-End
                    Development in general. I managed to acquire certification
                    on the Javascript Data Structures and Algorithms module. The
                    certification can be verified{" "}
                    <a href="https://www.freecodecamp.org/certification/faithshumia/javascript-algorithms-and-data-structures">
                      here.{" "}
                    </a>
                    You could also check out my learning progress on my
                    freeCodeCamp{" "}
                    <a href="https://www.freecodecamp.org/faithshumia">
                      profile.
                    </a>{" "}
                    I am currently covering the Front-End Frameworks Module.
                  </p>
                </div>
              </div>{" "}
            </div>{" "}
            {/* main-col end */}
          </div>{" "}
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
                  <p className="info"></p>
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
                  <p className="info"></p>
                  <p>
                    This is an app which generates and displays a new quote each
                    time the user clicks on the new quote button.You could check
                    out the full app{" "}
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
                  <h3>Movie Seat Booking App</h3>
                  <p className="info">
                    {/* UX Designer <span>•</span>{" "}
                    <em className="date">March 2007 - February 2010</em> */}
                  </p>
                  <p>
                    This a Vanilla Javascript,HTML and CSS app that simulates a
                    movie seat booking environment. While creating this app, I
                    strengthened my Javascript skills as well as HTML and CSS
                    styling. The app alongside the code can be viewed{" "}
                    <a href="https://faithgaiciumia.github.io/vanillaJs-movie-seat-booking-app/">
                      here.
                    </a>
                  </p>
                  <p>
                    <img src={movieapp} alt="movieapp" />
                  </p>
                </div>
              </div>{" "}
              <div className="row item">
                <div className="twelve columns">
                  <h3>React + Tailwind Image Gallery</h3>
                  <p>
                    In this project I acquire Random Images from the Pixabay API
                    and display them on my React App. The UI is implemented
                    using the CSS Utility Framework: Tailwind. I was able to
                    sharpen my skills on making API requests from a React App
                    using the Fetch API. The app as well as the full code can be
                    found{" "}
                    <a href="https://github.com/faithgaiciumia/react-tailwind-image-gallery">
                      here
                    </a>{" "}
                    and the{" "}
                    <a href="https://5f567bf39e0e976c8c4f3f6d--reactimagegallery.netlify.app">
                      app demo.{" "}
                    </a>
                  </p>
                  <p>
                    <img src={imagegallery} alt="imagegallery" />
                  </p>
                </div>
              </div>{" "}
              <div className="row item">
                <div className="twelve columns">
                  <h3>Technical Articles</h3>
                  <p className="info"></p>
                  <p>
                    Besides building projects, I also enjoy writing articles
                    where I share what I have learnt. I also use these articles
                    as a reminder for key concepts in the different languages,
                    libraries and frameworks I use. So far, I have published
                    technical articles on Medium as well as my{" "}
                    <a href="https://faithgaiciumia.hashnode.dev/">
                      {" "}
                      personal blog
                    </a>{" "}
                    on Hashnode. My Medium articles are as follows:{" "}
                    <a href="https://medium.com/@faithgaiciumia078/getting-started-with-reactjs-d95dc70dba8?source=your_stories_page---------------------------">
                      Medium Article 1
                    </a>
                    ,{" "}
                    <a href="https://medium.com/@faithgaiciumia078/creating-your-first-create-react-app-55fd2d49a740?source=your_stories_page---------------------------">
                      Medium Article 2
                    </a>
                    .{" "}
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
                    </ul>
                  </li>
                  <li>
                    <h3>Framework</h3>
                  </li>
                  <ul>
                    <li>Redux</li>
                    <li>Bootstrap</li>
                    <li>Material-UI</li>
                  </ul>
                  <li>
                    <h3>Libraries/APIs</h3>
                  </li>
                  <ul>
                    <li>React</li>
                    <li>jQuery</li>
                    <li>Node.js</li>
                    <li>REST APIs</li>
                    <li>ngrx</li>
                    <li>RxJS</li>
                  </ul>
                  <li>
                    <h3>Tools</h3>
                  </li>
                  <ul>
                    <li>Git</li>
                    <li>Webpack 2</li>
                  </ul>
                  <li>
                    <h3>Paradigms</h3>
                  </li>
                  <ul>
                    <li>Distributed Programming</li>
                    <li>REST</li>
                    <li>Object-Oriented Design(OOD)</li>
                    <li>Test-Driven Development(TDD)</li>
                    <li>Agile Software Development</li>
                  </ul>
                  <li>
                    <h3>Platforms/Other</h3>
                  </li>
                  <ul>
                    <li>Visual Studio Code</li>
                    <li>Firebase</li>
                    <li>Windows</li>
                    <li>Responsive Designs</li>
                    <li>Progressive Web Applications(PWA)</li>
                  </ul>
                  <li>
                    <h3>Storage</h3>
                  </li>
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
