import { motion } from "framer-motion";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

const navbarMotion = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6 },
};

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div>
          <Sidebar />
          <motion.span
            variants={navbarMotion}
            initial="initial"
            animate="animate"
            transition="transition"
          >
            Sina Pirvand
          </motion.span>
        </div>
        <motion.button
          variants={navbarMotion}
          initial="initial"
          animate="animate"
          transition="transition"
        >
          Download CV
        </motion.button>
      </div>
    </div>
  );
};

export default Navbar;
