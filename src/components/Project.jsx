import React from "react";
import "../styles/styleComp/_project.scss";

const TimelineItem = ({ data, position }) => {
  const { url, name, description, srcImage, alt, linkSource, linkDemo, stacks } = data;
  const [hovered, setHovered] = React.useState(false);

  return (
    <div className={`timeline-item ${position}`}>
      <div className="timeline-dot" />
      <div className="timeline-card">
        {srcImage && (
          <div className="timeline-card__img">
            <a target="_blank" href={url} rel="noopener noreferrer">
              <img
                src={srcImage}
                alt={alt}
                onMouseOut={() => setHovered(false)}
                onMouseOver={() => setHovered(true)}
                style={{
                  transform: `${hovered ? "translateY(-60%)" : "translateY(0%)"}`,
                  transition: "transform 8s ease-in-out 0s",
                }}
              />
            </a>
          </div>
        )}
        <div className="timeline-card__body">
          <h4 className="timeline-card__title">{name}</h4>
          <p className="timeline-card__desc">{description}</p>
          <div className="timeline-card__stacks">
            {stacks && stacks.map((s) => <span key={s} className="stack-tag">{s}</span>)}
          </div>
          <div className="timeline-card__links">
            {linkSource && linkSource !== "" && (
              <a target="_blank" href={linkSource} rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
                Code
              </a>
            )}
            {linkDemo && linkDemo !== "#" && (
              <a target="_blank" href={linkDemo} rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

function Project() {
  const data = [
    // ===== 2021 =====
    {
      id: 4,
      year: 2021,
      url: "https://netflix-clone-nextjs-ochre.vercel.app/",
      srcImage: "netflix-clone.png",
      alt: "netflix-clone",
      name: "Netflix Clone",
      description:
        "Netflix is a subscription-based streaming service that allows our members to watch TV shows and movies on an Internet-connected device.",
      linkSource: "https://github.com/quyphuc2111/netflix-clone-nextjs",
      linkDemo: "https://netflix-clone-nextjs-ochre.vercel.app/",
      stacks: ["NextJs", "Tailwind", "Prisma"],
    },
    // ===== 2022 =====
    {
      id: 3,
      year: 2022,
      url: "https://bavaan.com/",
      srcImage: "bavaan.png",
      alt: "bavaan",
      name: "Bavaan",
      description:
        "Bavaan have specialized in delivering the best e-Commerce solutions in both B2B/B2C markets with the world-class platforms.",
      linkSource: "",
      linkDemo: "https://bavaan.com/",
      stacks: ["Wordpress", "Elementor"],
    },
    {
      id: 6,
      year: 2022,
      url: "https://www.lainehome.co.nz/",
      srcImage: "laine-home.png",
      alt: "laine-home",
      name: "Laine Home",
      description:
        "Laine Home is a Kiwi owned and operated online retailer specializing in all homeware products.",
      linkSource: "",
      linkDemo: "https://www.lainehome.co.nz/",
      stacks: ["NextJs", "Tailwind", "GraphQL"],
    },
    // ===== 2023 =====
    {
      id: 1,
      year: 2023,
      url: "https://truestorefront.com/",
      srcImage: "truestorefront.png",
      alt: "true-storefront",
      name: "StoreFront",
      description:
        "TrueStorefront is a product introduction page for Shopify hydrogen. Shopify Hydrogen is the best choice to increase the shopping experience for your customers.",
      linkSource: "",
      linkDemo: "https://truestorefront.com/",
      stacks: ["NextJs", "Tailwind", "Strapi"],
    },
    {
      id: 2,
      year: 2023,
      url: "https://ap-noes.myshopify.com/",
      srcImage: "ap-noes.jpg",
      alt: "ap-noes",
      name: "Ap Noes (Pass: 1)",
      description:
        "Ap Noes Unisex Fashion Shopify Theme is an exclusive eCommerce website template for online stores selling casual clothing, unisex fashion, hats, glasses, etc.",
      linkSource: "",
      linkDemo: "https://ap-noes.myshopify.com/",
      stacks: ["HTML", "CSS", "Bootstrap", "Javascript"],
    },
    {
      id: 5,
      year: 2023,
      url: "https://demo.truestorefront.com/",
      srcImage: "owen-theme.png",
      alt: "owen-theme",
      name: "Owen Theme",
      description:
        "The Hydrogen theme is designed for businesses that need a fast, flexible, and highly customizable Shopify store.",
      linkSource: "",
      linkDemo: "https://demo.truestorefront.com/",
      stacks: ["ReactJs", "Tailwind", "Sanity"],
    },
    {
      id: 7,
      year: 2023,
      url: "https://ap-basic.myshopify.com/",
      srcImage: "bridey-theme.png",
      alt: "bridey-theme",
      name: "Bridey Theme (Pass: 1)",
      description:
        "Bridey is Bridal Store WooCommerce WordPress Theme for wedding/bridal shops, selling dresses, suits and decorations.",
      linkSource: "",
      linkDemo: "https://ap-basic.myshopify.com/",
      stacks: ["HTML", "CSS", "Tailwind", "Bootstrap"],
    },
    // ===== 2025 - BKT COMPANY =====
    {
      id: 8,
      year: 2025,
      url: "#",
      srcImage: "",
      alt: "bkt-lms",
      name: "BKT LMS",
      description:
        "A Learning Management System for BKT Company. Supports course management, lesson delivery, and student progress tracking.",
      linkSource: "",
      linkDemo: "#",
      stacks: ["Next.js", "React", "Tailwind", "React Query"],
    },
    {
      id: 9,
      year: 2025,
      url: "https://thuvienmamnon.vn/preschool-library",
      srcImage: "thuvienmamnon.png",
      alt: "thu-vien-mam-non",
      name: "Thư Viện Mầm Non",
      description:
        "A digital library for preschool education. Manages learning materials, e-books, and teaching resources for teachers and parents.",
      linkSource: "",
      linkDemo: "https://thuvienmamnon.vn/preschool-library",
      stacks: ["Next.js", "Prisma", "Tailwind", "Vitest"],
    },
    {
      id: 10,
      year: 2025,
      url: "https://smk.bkt.net.vn/",
      srcImage: "smartkid.png",
      alt: "smartkids-tvmn",
      name: "SmartKids TVMN",
      description:
        "SmartKids web application for the preschool library. A child-friendly interface for kids and teachers to interact with digital learning content.",
      linkSource: "",
      linkDemo: "https://smk.bkt.net.vn/",
      stacks: ["Next.js", "React", "Tailwind"],
    },
    {
      id: 11,
      year: 2025,
      url: "https://static.bkt.net.vn/",
      srcImage: "static.png",
      alt: "static-content-server",
      name: "Static Content Server",
      description:
        "A static content management system with RBAC authorization. Supports uploading, managing SCORM/H5P content, project management, and content sharing.",
      linkSource: "",
      linkDemo: "https://static.bkt.net.vn/",
      stacks: ["Next.js", "Prisma", "Radix UI", "Tailwind"],
    },
    {
      id: 12,
      year: 2025,
      url: "#",
      srcImage: "",
      alt: "scorm-h5p-server",
      name: "SCORM & H5P Server",
      description:
        "A server for delivering SCORM and H5P content to e-learning systems. Tracks learning progress following the SCORM standard.",
      linkSource: "",
      linkDemo: "#",
      stacks: ["C# .NET", "Docker", "Node.js"],
    },
    {
      id: 13,
      year: 2025,
      url: "#",
      srcImage: "",
      alt: "smart-e-learning-web",
      name: "Smart E-Learning Web",
      description:
        "A smart e-learning platform featuring interactive presentations, visual charts, and multimedia content.",
      linkSource: "",
      linkDemo: "#",
      stacks: ["Vue.js", "Vite", "Chart.js", "FFmpeg"],
    },
    {
      id: 14,
      year: 2025,
      url: "#",
      srcImage: "",
      alt: "smartlab-bkt",
      name: "SmartLab BKT",
      description:
        "A smart computer lab management desktop application. Manages usage schedules, software, and monitors work sessions.",
      linkSource: "",
      linkDemo: "#",
      stacks: ["React", "TypeScript", "Tauri", "Tailwind", "Recharts"],
    },
    {
      id: 15,
      year: 2025,
      url: "#",
      srcImage: "",
      alt: "share-screen",
      name: "Share Screen",
      description:
        "A real-time screen sharing desktop application. Built with Tauri for high performance and a lightweight footprint.",
      linkSource: "",
      linkDemo: "#",
      stacks: ["React", "TypeScript", "Tauri"],
    },
    {
      id: 16,
      year: 2025,
      url: "#",
      srcImage: "payment.png",
      alt: "payment-checkout",
      name: "Payment Checkout",
      description:
        "An online payment system integrating multiple payment gateways (Payment Gateway, SePay). Supports both web and mobile.",
      linkSource: "",
      linkDemo: "#",
      stacks: ["React", "Node.js", "Payment Gateway"],
    },
    {
      id: 17,
      year: 2025,
      url: "#",
      srcImage: "",
      alt: "vietqr",
      name: "VietQR Payment",
      description:
        "A QR code payment generator following the VietQR standard for bank transfer transactions in Vietnam.",
      linkSource: "",
      linkDemo: "#",
      stacks: ["Express.js", "Node.js"],
    },
    {
      id: 18,
      year: 2025,
      url: "#",
      srcImage: "",
      alt: "sql-server-smartlab",
      name: "BKT Smart Lab Manager",
      description:
        "A lab management system powered by SQL Server. Manages client/server setup, session scheduling, and activity monitoring.",
      linkSource: "",
      linkDemo: "#",
      stacks: ["C#", "SQL Server", "Docker", ".NET"],
    },
    {
      id: 19,
      year: 2025,
      url: "https://edu.bkt.net.vn/",
      srcImage: "edu.png",
      alt: "bkt-edu",
      name: "BKT Education Portal",
      description:
        "BKT's online education portal. A learning platform for managing digital educational content for teachers, students, and parents.",
      linkSource: "",
      linkDemo: "https://edu.bkt.net.vn/",
      stacks: ["Next.js", "React", "Tailwind"],
    },
  ];

  // Group projects by year (descending)
  const groupedByYear = data.reduce((acc, item) => {
    if (!acc[item.year]) acc[item.year] = [];
    acc[item.year].push(item);
    return acc;
  }, {});

  const sortedYears = Object.keys(groupedByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <section id="projects" className="project">
      <div className="container">
        <div className="project-content">
          <p>portfolio</p>
          <h3>Each project is a unique piece of development 🧩</h3>

          <div className="timeline">
            <div className="timeline-line" />
            {sortedYears.map((year) => (
              <div key={year} className="timeline-year-group">
                <div className="timeline-year-badge">
                  <span>{year}</span>
                </div>
                <div className="timeline-items">
                  {groupedByYear[year].map((item, idx) => (
                    <TimelineItem
                      key={item.id}
                      data={item}
                      position={idx % 2 === 0 ? "left" : "right"}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
