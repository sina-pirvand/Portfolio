import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./portfolio.scss";

const items = [
  {
    id: 1,
    title: "Freelancera",
    description:
      "Freelancer Platform containing 3 dashboards (Freelancer, Employer, Admin) where users can create projects and send proposals. React.js, React Query, Axios, React hook form, React Router DOM, Tailwind,... used on client-side, backend running on MongoDB built with Express.js",
    img: "/Freelancera.jpg",
    url: "https://freelancera-app.liara.run",
  },
  {
    id: 2,
    title: "Quera Task Manager",
    description:
      "Team project during Quera bootcamp using React.js, TS, React Router DOM, Axios, Tailwind, and etc.",
    img: "/taskManager.jpg",
    url: "https://exxzam-task-manager.liara.run",
  },
  {
    id: 3,
    title: "Rick-and-Morty",
    description:
      "A small fun app about Rick and Morty TV Show characters. using Reactjs, Axios, Tailwind, etc.",
    img: "/rick-morty.jpg",
    url: "https://rick-and-morty-csb2.netlify.app",
  },
  {
    id: 4,
    title: "ARC Trip",
    description:
      "Hotel reservation website including landing page, registration form, hotel display page, results page, blog, payment page, and user panel. Built with HTML, CSS, JS, jQuery, Bootstrap5",
    img: "/arctrip.jpg",
    url: "https://arctrip.ir",
  },
];

const ProjectSection = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <img src={item.img} alt="Preview Image" ref={ref} />
          {/* style = {{y:y}} => style={{y}} */}
          <motion.div
            className="textContainer"
            style={{ y }}
            transition={{
              type: "spring",
              stiffness: 10,
              damping: 10,
            }}
          >
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <motion.a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 0.95 }}
            >
              See Demo
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <ProjectSection item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
