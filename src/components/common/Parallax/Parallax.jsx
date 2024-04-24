import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./parallax.scss";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "600%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div
      ref={ref}
      className={`parallax ${
        type === "aboutMe" ? "aboutMeParallax" : "portfolioParallax"
      }`}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "aboutMe" ? "About Me" : "Portfolio"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "aboutMe" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div className="stars" style={{ x: yBg }}></motion.div>
    </div>
  );
};

export default Parallax;
