import React from "react";
import "../styles/styleComp/_project.scss";

export const ProjectItem = ({ data }) => {
  const {
    isReverse,
    url,
    name,
    description,
    srcImage,
    alt,
    dateTime,
    linkSource,
    linkDemo,
    stacks,
  } = data;
  const [hovered, setHovered] = React.useState(false);

  return (
    <div className={`pro pro__1 ${isReverse ? "reversed-proj" : ""}`}>
      <div className="pro__img">
        <a target="_blank" href={url} rel="noreferrer">
          <img
            src={srcImage}
            alt={alt}
            onMouseOut={() => setHovered(false)}
            onMouseOver={() => setHovered(true)}
            style={{
              transform: `${hovered ? "translateY(-83%)" : "translateY(0%)"}`,
              transition: "transform 10s ease-in-out 0s",
            }}
          />
        </a>
      </div>
      <div className="pro__text">
        <h3>
          {name} <span className="date-className">{dateTime}</span>
        </h3>
        <p>{description}</p>
        <div className="stack">
          {stacks && stacks.map((e) => <p key={e}>{e}</p>)}
        </div>
        <div className="links">
          {linkSource && (
            <a target="_blank" href={`${linkSource}`} rel="noreferrer">
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

          <a target="_blank" href={`${linkDemo}`} rel="noreferrer">
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
  );
};

function Project() {
  const [data, setData] = React.useState([
    {
      id: 1,
      url: "https://truestorefront.com/",
      srcImage: "truestorefront.png",
      alt: "true-storefront",
      isReverse: false,
      name: "StoreFront",
      description:
        "TrueStorefront is a product introduction page for Shopify hydrogen. Shopify Hydrogen is the best choice to increase the shopping experience for your customers.",
      dateTime: "(April 2023)",
      linkSource: "",
      linkDemo: "https://truestorefront.com/",
      stacks: ["NextJs", "Tailwind", "Strapi"],
    },
    {
      id: 2,
      url: "https://ap-noes.myshopify.com/",
      srcImage: "ap-noes.jpg",
      alt: "ap-noes",
      isReverse: true,
      name: "Ap Noes (Pass: 1)",
      description:
        "Ap Noes Unisex Fashion Shopify Theme is an exclusive eCommerce website template that you may want to choose at first look. This theme is ideal for any online store to sell casual clothing, unisex fashion, hats, glasses, etc.",
      dateTime: "(MAY 2023)",
      linkSource: "",
      linkDemo: "https://ap-noes.myshopify.com/",
      stacks: ["HTML", "CSS", "Bootstrap", "Javascript"],
    },
    {
      id: 3,
      url: "https://bavaan.com/",
      srcImage: "bavaan.png",
      alt: "bavaan",
      isReverse: false,
      name: "Bavaan",
      description:
        "Bavaan have specialized in delivering the best e-Commerce solutions in both B2B/ B2C markets with the world-class platforms.",
      dateTime: "(AUGUST 2022)",
      linkSource: "",
      linkDemo: "https://bavaan.com/",
      stacks: ["Wordpress", "Elementor"],
    },
    {
      id: 4,
      url: "https://netflix-clone-nextjs-ochre.vercel.app/",
      srcImage: "netflix-clone.png",
      alt: "netflix-clone",
      isReverse: true,
      name: "Netflix",
      description:
        "Netflix is ​​a subscription-based streaming service that allows our members to watch TV shows and movies on an Internet-connected device.",
      dateTime: "(MAY 2021)",
      linkSource: "https://github.com/quyphuc2111/netflix-clone-nextjs",
      linkDemo: "https://netflix-clone-nextjs-ochre.vercel.app/",
      stacks: ["NextJs", "Tailwind", "Prisma"],
    },
    {
      id: 5,
      url: "https://demo.truestorefront.com/",
      srcImage: "owen-theme.png",
      alt: "owen-theme",
      isReverse: false,
      name: "Owen Theme",
      description:
        "The Hydrogen theme is designed for businesses that need a fast, flexible, and highly customizable Shopify store.",
      dateTime: "(MAY 2023)",
      linkSource: "",
      linkDemo: "https://demo.truestorefront.com/",
      stacks: ["ReactJs", "Tailwind", "Sanity"],
    },
    {
      id: 6,
      url: "https://www.lainehome.co.nz/",
      srcImage: "laine-home.png",
      alt: "laine-home",
      isReverse: true,
      name: "Laine Home",
      description:
        "Laine Home is a Kiwi owned and operated online retailer specializing in all homeware products.",
      dateTime: "(DEC 2022)",
      linkSource: "",
      linkDemo: "https://www.lainehome.co.nz/",
      stacks: ["NextJs", "Tailwind", "GraphQL"],
    },
    {
      id: 7,
      url: "https://ap-basic.myshopify.com/",
      srcImage: "bridey-theme.png",
      alt: "bridey-theme",
      isReverse: false,
      name: "Bridey Theme (Pass: 1)",
      description:
        "Bridey is Bridal Store WooCommerce WordPress Theme that develops to open his/her wedding / bridal shop, sell beautiful dresses and suits and decorations for those getting married",
      dateTime: "(JUL 2023)",
      linkSource: "",
      linkDemo: "https://ap-basic.myshopify.com/",
      stacks: ["HTML", "CSS", "Tailwind", "Bootstrap"],
    },
  ]);

  return (
    <section id="projects" className="project">
      <div className="container">
        <div className="project-content">
          <p>portfolio</p>
          <h3>Each project is a unique piece of development 🧩</h3>
          <div className="projects-grid">
            {data &&
              data.map((item) => <ProjectItem key={item.id} data={item} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
