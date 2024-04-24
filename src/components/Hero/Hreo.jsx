import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const Hreo = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>
            <span>Call me </span>&#34;CyberSageB2&#34;!
          </motion.h2>
          <motion.h1 variants={textVariants}>
            Front-end <br /> Web Developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See My Latest Works
            </motion.button>
            <motion.button variants={textVariants} className="btnFilled">
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            className="scrollImg"
            src="/public/scroll.png"
            alt="Scroll Item"
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
        <div className="imageContainer">
          <img src="/public/hero.png" alt="" />
        </div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Sina Pirvand
      </motion.div>
    </div>
  );
};

export default Hreo;
