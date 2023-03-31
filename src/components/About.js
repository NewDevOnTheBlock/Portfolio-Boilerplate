import React from "react";

function About() {
  return (
    <section className="content-container">
      <span className="about-content">
      <div className="full-name-logo"></div>
      <div className="about-card">
        <div className="skill-card">
          <div className="skills spaced">
            <div className="skills-top">
              <span>
                <h4>Front-End:</h4>
                <div>
                  <p>React</p>
                  <p>Vue.js</p>
                  <p>Angular</p>
                  <p>SCSS</p>
                  <p>Bootstrap</p>
                  <p>JavaScript</p>
                  <p>Figma</p>
                </div>
              </span>
              <span>
                <h4>Back-End:</h4>
                <div className="skills">
                  <p>Node.js</p>
                  <p>Express.js</p>
                  <p>PostgreSQL</p>
                  <p>MongoDB</p>
                  <p>Knex.js</p>
                  <p>C#*</p>
                  <p>Python*</p>
                  <p>AWS*</p>
                </div>
              </span>
            </div>
          <div className="skills-bottom">
            <div className="skills-other">
              <h4>Other Skills</h4>
              <div>
                <p>Mocha/Chai</p>
                <p>App Deployment</p>
                <p>Pair Programming</p>
                <p>Enthusiastic about learning new technologies</p>
                <p>Easily Teachable</p>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="about-me">
          <h3>About Me</h3>
          <p>Hello there unfamiliar visitor, I am Pierce DeAnda. I’m a dedicated problem solver and a hard-working lover of technology. I recently graduated from Thinkful’s/Chegg Full-Stack Engineering Program that lasted for five months on a full-time schedule. I learned a lot about how to build websites, make requests, create databases, and test code. I also learned about overcoming blockers, working as a team, learning to ask questions and offer constructive criticism and how to keep myself and my teammates accountable.Before going to the bootcamp, I tried checking out different programs like The Odin Project, FreeCodeCamp, and Udemy. I enjoyed it, but when I got to learning JavaScript, I felt it might be best to find another resource to aid in the process. After some research on YouTube, I found that there was a highly recommended book in several different videos called, Head First: JavaScript. I read that book front to back 3 times before my time at the bootcamp. So by the time it started I felt like I had a head start. </p>
          <p>IU+2019m comfortable working in a MER/V/AN Stack with bootstrap, tailwind, and SCSS libraries for styling. I am deeply invested in developing my skills further and am currently learning AWS, C#, and Python. I’m comfortable dealing with relational and non-relational databases, my preference at the moment being MongoDB. </p>
          <div className="download">
            {/* <button className="resume-button">Download Resume</button> */}
          </div>
        </div>
      </div>
      </span>
    </section>
  );
}

export default About;
