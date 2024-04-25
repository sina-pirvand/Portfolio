import { HiOutlinePaintBrush } from "react-icons/hi2";
import { PiPuzzlePiece } from "react-icons/pi";
import { AiOutlineFire } from "react-icons/ai";
import { LuTextSelect } from "react-icons/lu";
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

const AboutMe = () => {
  return (
    <div className="aboutMeSection">
      <div className="aboutMe">
        <div className="aboutMeText">
          <h1>About Me</h1>
          <p>
            I'm Sina, a Junior Front-end Developer with a real passion for
            taking on new challenges. Super motivated and always eager to learn
            more and enhance my skills. Creating awesome, user-friendly
            experiences is what I'm all about, I'm so excited to keep growing in
            this dynamic industry.
          </p>
          <div className="aboutMeIconsContainer">
            {items.map((item) => (
              <div className="abilityContainer" key={item.name}>
                <div className={`itemContainer itemContainer-${item.color}`}>
                  <item.name className={`aboutMeIcon`} />
                </div>
                <span className={`abilityText-${item.color}`}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="aboutMeImg">
          <img src="/public/info.png" alt="info" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
