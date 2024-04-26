import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./portfolio.scss";

const items = [
  {
    id: 1,
    title: "Freelancera",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reiciendis in aspernatur consequuntur atque repudiandae, error facilis cumque ducimus, molestias distinctio dolores itaque excepturi unde totam repellendus? Facere, deleniti ducimus.",
    img: "/Freelancera.jpg",
  },
  {
    id: 2,
    title: "Freelancera",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reiciendis in aspernatur consequuntur atque repudiandae, error facilis cumque ducimus, molestias distinctio dolores itaque excepturi unde totam repellendus? Facere, deleniti ducimus.",
    img: "/Freelancera.jpg",
  },
  {
    id: 3,
    title: "Freelancera",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reiciendis in aspernatur consequuntur atque repudiandae, error facilis cumque ducimus, molestias distinctio dolores itaque excepturi unde totam repellendus? Facere, deleniti ducimus.",
    img: "/Freelancera.jpg",
  },
  {
    id: 4,
    title: "Freelancera",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reiciendis in aspernatur consequuntur atque repudiandae, error facilis cumque ducimus, molestias distinctio dolores itaque excepturi unde totam repellendus? Facere, deleniti ducimus.",
    img: "/Freelancera.jpg",
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
            <motion.button whileHover={{ scale: 0.95 }}>See Demo</motion.button>
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
