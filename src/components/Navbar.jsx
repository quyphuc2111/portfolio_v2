import { useState } from "react";
import "../styles/styleComp/_nav.scss";
import { Link } from "react-scroll";

function Navbar() {
  const [openMenu, setOpenMenu] = useState("closed-menu");
  const handleClickScroll = () => {
    const element = document.getElementById("about");

    if (element) {
      console.log("!23");
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav>
        <h3 className="logo">Zena.dev</h3>
        <ul>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
            >
              Contact
            </Link>
          </li>
          <li onClick={() => setOpenMenu("open-menu")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mobile-menu"
            >
              <path d="M4 6l16 0"></path>
              <path d="M4 12l16 0"></path>
              <path d="M4 18l16 0"></path>
            </svg>
          </li>
        </ul>
      </nav>
      <div className={`mobile-nav ${openMenu}`}>
        <span onClick={() => setOpenMenu("closed-menu")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tabler-icon tabler-icon-x"
          >
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </span>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
