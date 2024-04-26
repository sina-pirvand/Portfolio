import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./portfolio.scss";

const items = [
  {
    id: 1,
    title: "Freelancera",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reiciendis in aspernatur consequuntur atque repudiandae, error facilis cumque ducimus, molestias distinctio dolores itaque excepturi unde totam repellendus? Facere, deleniti ducimus.",
    img: "/info.png",
  },
  {
    id: 2,
    title: "Freelancera",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reiciendis in aspernatur consequuntur atque repudiandae, error facilis cumque ducimus, molestias distinctio dolores itaque excepturi unde totam repellendus? Facere, deleniti ducimus.",
    img: "/info.png",
  },
  {
    id: 3,
    title: "Freelancera",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reiciendis in aspernatur consequuntur atque repudiandae, error facilis cumque ducimus, molestias distinctio dolores itaque excepturi unde totam repellendus? Facere, deleniti ducimus.",
    img: "/info.png",
  },
  {
    id: 4,
    title: "Freelancera",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reiciendis in aspernatur consequuntur atque repudiandae, error facilis cumque ducimus, molestias distinctio dolores itaque excepturi unde totam repellendus? Facere, deleniti ducimus.",
    img: "/info.png",
  },
];

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 5,
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
