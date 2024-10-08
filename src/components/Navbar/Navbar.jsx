import { motion } from "framer-motion";
import {
  HiChevronDown,
  HiChevronUp,
  HiOutlineDownload,
  HiEye,
} from "react-icons/hi";
import Sidebar from "../Sidebar/Sidebar";
import "./navbar.scss";
import { useState } from "react";

const navbarMotion = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6 },
};

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow((s) => !s);
  };
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
            className="myName"
          >
            Sina Pirvand
          </motion.span>
        </div>
        <div className="dropdown">
          <motion.button
            variants={navbarMotion}
            initial="initial"
            animate="animate"
            transition="transition"
            onClick={handleClick}
          >
            <span>Check my CV</span>
            {show ? (
              <HiChevronUp className="icon" />
            ) : (
              <HiChevronDown className="icon" />
            )}
          </motion.button>
          {show && (
            <div className="dropdownList">
              <a
                href="https://drive.google.com/file/d/1ywERjJFyELUgLKskQrG6m4b2M87ibaFA/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                onClick={handleClick}
              >
                <HiEye style={{ fontSize: "1.2rem", marginLeft: "0.1rem" }} />
                <span>View Online</span>
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1ywERjJFyELUgLKskQrG6m4b2M87ibaFA"
                onClick={handleClick}
              >
                <HiOutlineDownload className="icon" />
                <span>Download</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
