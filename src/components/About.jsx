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
             A dedicated FullStack Developer <br /> based in Hanoi, Vietnam
             📍
           </h4>
           <p>
             As a FullStack Developer, I possess a strong skill set spanning
             both front-end and back-end technologies including HTML, CSS,
             JavaScript, TypeScript, React, Next.js, Tailwind, SCSS, Node.js,
             Express, MongoDB, and PostgreSQL. I excel in building and
             maintaining responsive, full-featured web applications that offer
             a smooth user experience. My expertise lies in crafting dynamic,
             engaging interfaces and robust server-side solutions through
             writing clean and optimized code. I am also a team player who
             thrives in collaborating with cross-functional teams to deliver
             outstanding products end-to-end.
           </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
