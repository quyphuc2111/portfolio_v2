import React from "react";
import "../styles/styleComp/_about.scss"

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="img-side">
            <img
              src="working-emoji.png"
              alt="emoji"
              className="work-emoji"
            />
            <img
              src="macbook-air-on-desk.jpg"
              alt="desk-work"
              className="img-side__main-img"
            />
            <span>
              <img
                src="text2.svg"
                alt="text"
              />
            </span>
          </div>
          <div className="text-side">
            <h3>About me</h3>
            <h4>
              A dedicated Front-end Developer <br /> based in Hanoi, Vietnam
              📍
            </h4>
            <p>
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React, NextJs, Tailwind, and SCSS. I
              excel in designing and maintaining responsive websites that offer
              a smooth user experience. My expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utilizing cutting-edge development tools and techniques. I am also
              a team player who thrives in collaborating with cross-functional
              teams to produce outstanding web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
