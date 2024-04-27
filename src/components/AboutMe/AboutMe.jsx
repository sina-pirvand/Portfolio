import { motion, useInView } from "framer-motion";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { PiPuzzlePiece } from "react-icons/pi";
import { AiOutlineFire } from "react-icons/ai";
import { LuTextSelect } from "react-icons/lu";
import { useRef } from "react";
import "./aboutMe.scss";

const items = [
  {
    name: LuTextSelect,
    color: "blue",
    text: "Hungry Learner ",
  },
  {
    name: AiOutlineFire,
    color: "red",
    text: "Passionate ",
  },
  {
    name: PiPuzzlePiece,
    color: "yellow",
    text: "Problem Solver",
  },
  {
    name: HiOutlinePaintBrush,
    color: "green",
    text: "Creative",
  },
];

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.15,
    },
  },
};

const imgVariants = {
  animate: {
    scale: [0.98, 1.03, 0.98],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
    },
  },
};

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="aboutMeSection">
      <motion.div
        className="aboutMe"
        variants={variants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        ref={ref}
      >
        <motion.div className="aboutMeText" variants={variants}>
          <motion.h1 variants={variants}>About Me</motion.h1>
          <motion.p variants={variants}>
            I'm Sina, a Junior Front-end Developer with a real passion for
            taking on new challenges. Super motivated and always eager to learn
            more and enhance my skills. Creating awesome, user-friendly
            experiences is what I'm all about, I'm so excited to keep growing in
            this dynamic industry.
          </motion.p>
          <motion.div className="aboutMeIconsContainer" variants={variants}>
            {items.map((item) => (
              <motion.div
                className="abilityContainer"
                key={item.name}
                variants={variants}
              >
                <div className={`itemContainer itemContainer-${item.color}`}>
                  <item.name className={`aboutMeIcon`} />
                </div>
                <span className={`abilityText-${item.color}`}>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="aboutMeImg"
          variants={imgVariants}
          animate="animate"
        >
          <img src="/info.png" alt="info" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
