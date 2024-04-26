import Navbar from "./components/navbar/Navbar";
import "./app.scss";
import Hreo from "./components/Hero/Hreo";
import Parallax from "./components/common/Parallax/Parallax";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";

const App = () => {
  return (
    <div>
      <section>
        <Navbar />
        <Hreo />
      </section>
      <section>
        <Parallax type="aboutMe" />
      </section>
      <section id="AboutMe">
        <AboutMe />
      </section>
      <section>
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section>contact</section>
    </div>
  );
};

export default App;
