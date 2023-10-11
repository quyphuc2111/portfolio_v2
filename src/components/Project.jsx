import React from "react";
import "../styles/styleComp/_project.scss";

export const ProjectItem = ({data}) => {
    const {isReverse, url, name, description, srcImage, alt, dateTime, linkSource, linkDemo, stacks} = data
    const [hovered, setHovered] = React.useState(false)

    return (
        <div className={`pro pro__1 ${isReverse ? 'reversed-proj' : '' }`}>
        <div className="pro__img">
          <a
            target="_blank"
            href={url}
            rel="noreferrer"
          >
            <img
              src={srcImage}
              alt={alt}
              onMouseOut={() => setHovered(false)}
              onMouseOver={() => setHovered(true)}
              style={{
                transform: `${
                  hovered ? "translateY(-83%)" : "translateY(0%)"
                }`,
                transition: "transform 10s ease-in-out 0s"
              }}
            />
          </a>
        </div>
        <div className="pro__text">
          <h3>
            {name}{" "}
            <span className="date-className">{dateTime}</span> 🚗
          </h3>
          <p>
           {description}
          </p>
          <div className="stack">
            {
                stacks && (
                    stacks.map(e => (
                        <p key={e}>{e}</p>
                    ))
                )
            }
          </div>
          <div className="links">
            {linkSource && (
              <a
              target="_blank"
              href={`${linkSource}`}
              rel="noreferrer"
            >
              Code
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-brand-github"
              >
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
            </a>
            )}
            
            <a
              target="_blank"
              href={`${linkDemo}`}
              rel="noreferrer"
            >
              Live Demo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-external-link"
              >
                <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                <path d="M11 13l9 -9"></path>
                <path d="M15 4h5v5"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    )
}

function Project() {
    const [data, setData] = React.useState([
        {
            id: 1,
            url: "https://truestorefront.com/",
            srcImage: "truestorefront.png",
            alt: "true-storefront",
            isReverse: false,
            name: "StoreFront",
            description: "TrueStorefront is a product introduction page for Shopify hydrogen. Shopify Hydrogen is the best choice to increase the shopping experience for your customers.",
            dateTime: "(April 2023)",
            linkSource: "",
            linkDemo: "https://truestorefront.com/",
            stacks: [
                "NextJs",
                "Tailwind"
            ]
        },
        {
            id: 2,
            url: "https://ap-noes.myshopify.com/",
            srcImage: "ap-noes.jpg",
            alt: "ap-noes",
            isReverse: true,
            name: "Ap Noes",
            description: "Ap Noes Unisex Fashion Shopify Theme is an exclusive eCommerce website template that you may want to choose at first look. This theme is ideal for any online store to sell casual clothing, unisex fashion, hats, glasses, etc.",
            dateTime: "(MAY 2023)",
            linkSource: "",
            linkDemo: "https://ap-noes.myshopify.com/",
            stacks: [
                "Shopify Liquid",
                "HTML",
                "CSS"
            ]
        },
        {
            id: 3,
            url: "https://bavaan.com/",
            srcImage: "bavaan.png",
            alt: "bavaan",
            isReverse: false,
            name: "Bavaan",
            description: "Bavaan have specialized in delivering the best e-Commerce solutions in both B2B/ B2C markets with the world-class platforms.",
            dateTime: "(AUGUST 2022)",
            linkSource: "",
            linkDemo: "https://bavaan.com/",
            stacks: [
                "Wordpress",
                "Elementor"
            ]
        },
        {
            id: 4,
            url: "https://netflix-clone-nextjs-ochre.vercel.app/",
            srcImage: "netflix-clone.png",
            alt: "netflix-clone",
            isReverse: true,
            name: "Netflix",
            description: "Netflix is ​​a subscription-based streaming service that allows our members to watch TV shows and movies on an Internet-connected device.",
            dateTime: "(MAY 2021)",
            linkSource: "https://github.com/quyphuc2111/netflix-clone-nextjs",
            linkDemo: "https://netflix-clone-nextjs-ochre.vercel.app/",
            stacks: [
                "NextJs",
                "Tailwind",
                "Prisma"
            ]
        }
    ])
    
  return (
    <section id="projects" className="project">
      <div className="container">
        <div className="project-content">
          <p>portfolio</p>
          <h3>Each project is a unique piece of development 🧩</h3>
          <div className="projects-grid">
            {
                data && (
                    data.map((item) => (
                        <ProjectItem key={item.id} data={item} />
                    ))
                )
            }
            {/* <div className="pro pro__1 undefined">
              <div className="pro__img">
                <a
                  target="_blank"
                  href="https://car-rental-ten.vercel.app/"
                  rel="noreferrer"
                >
                  <img
                    src="truestorefront.png"
                    alt="website"
                    onMouseOut={() => setHovered(false)}
                    onMouseOver={() => setHovered(true)}
                    style={{
                      transform: `${
                        hovered ? "translateY(-83%)" : "translateY(0%)"
                      }`,
                      transition: "transform 10s ease-in-out 0s"
                    }}
                  />
                </a>
              </div>
              <div className="pro__text">
                <h3>
                  Car Rental{" "}
                  <span className="date-className">(February 2023)</span> 🚗
                </h3>
                <p>
                  A car rental website is an online platform that allows users
                  to rent cars for personal or business use. The website
                  provides an interface for searching, comparing, and reserving
                  cars.
                </p>
                <div className="stack">
                  <p>React</p>
                  <p>SCSS</p>
                </div>
                <div className="links">
                  <a
                    target="_blank"
                    href="https://github.com/stefvndev/car-rental"
                    rel="noreferrer"
                  >
                    Code
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-brand-github"
                    >
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    href="https://car-rental-ten.vercel.app/"
                    rel="noreferrer"
                  >
                    Live Demo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-external-link"
                    >
                      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                      <path d="M11 13l9 -9"></path>
                      <path d="M15 4h5v5"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="pro pro__1 reversed-proj">
              <div className="pro__img">
                <a
                  target="_blank"
                  href="https://coindom-crypto-search.vercel.app/"
                  rel="noreferrer"
                >
                  <img
                    src="truestorefront.png"
                    alt="website"
                    onMouseOut={() => setHovered(false)}
                    onMouseOver={() => setHovered(true)}
                    style={{
                      transform: `${
                        hovered ? "translateY(-83%)" : "translateY(0%)"
                      }`,
                      transition: "transform 10s ease-in-out 0s"
                    }}
                  />
                </a>
              </div>
              <div className="pro__text">
                <h3>
                  Coindom{" "}
                  <span className="date-className">(February 2023)</span> 🪙
                </h3>
                <p>
                  Coindom is a crypto app that allows users to search for
                  information about various cryptocurrencies in real-time.
                </p>
                <div className="stack">
                  <p>React</p>
                  <p>SCSS</p>
                </div>
                <div className="links">
                  <a
                    target="_blank"
                    href="https://github.com/stefvndev/coindom-crypto"
                    rel="noreferrer"
                  >
                    Code
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-brand-github"
                    >
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    href="https://coindom-crypto-search.vercel.app/"
                    rel="noreferrer"
                  >
                    Live Demo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-external-link"
                    >
                      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                      <path d="M11 13l9 -9"></path>
                      <path d="M15 4h5v5"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="pro pro__1 undefined">
              <div className="pro__img">
                <a
                  target="_blank"
                  href="https://gymate-iota.vercel.app/"
                  rel="noreferrer"
                >
                  <img
                    src="/static/media/gymate-home.52d00d03c15713c601c4.webp"
                    alt="website"
                  />
                </a>
              </div>
              <div className="pro__text">
                <h3>
                  Gymate <span className="date-className">(January 2023)</span>{" "}
                  🏋️
                </h3>
                <p>
                  A gym website is a comprehensive resource for fitness
                  information, className schedules, membership options, and
                  tools to help users achieve their fitness goals.
                </p>
                <div className="stack">
                  <p>React</p>
                  <p>Tailwind CSS</p>
                </div>
                <div className="links">
                  <a
                    target="_blank"
                    href="https://github.com/stefvndev/Gymate"
                    rel="noreferrer"
                  >
                    Code
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-brand-github"
                    >
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    href="https://gymate-iota.vercel.app/"
                    rel="noreferrer"
                  >
                    Live Demo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-external-link"
                    >
                      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                      <path d="M11 13l9 -9"></path>
                      <path d="M15 4h5v5"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="pro pro__1 reversed-proj">
              <div className="pro__img">
                <a
                  target="_blank"
                  href="https://minimalist-e-commerce.vercel.app/"
                  rel="noreferrer"
                >
                  <img
                    src="/static/media/ecom.f10b3cdd799be85c19da.webp"
                    alt="website"
                  />
                </a>
              </div>
              <div className="pro__text">
                <h3>
                  Ecommerce{" "}
                  <span className="date-className">(December 2022)</span> 🛒
                </h3>
                <p>
                  With a focus on simplicity and clean design, this store
                  prioritize user experience, making it easy for customers to
                  find and purchase the products they need.
                </p>
                <div className="stack">
                  <p>React</p>
                  <p>Vanila CSS</p>
                </div>
                <div className="links">
                  <a
                    target="_blank"
                    href="https://github.com/stefvndev/Minimalist-E-commerce"
                    rel="noreferrer"
                  >
                    Code
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-brand-github"
                    >
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    href="https://minimalist-e-commerce.vercel.app/"
                    rel="noreferrer"
                  >
                    Live Demo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-external-link"
                    >
                      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                      <path d="M11 13l9 -9"></path>
                      <path d="M15 4h5v5"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
