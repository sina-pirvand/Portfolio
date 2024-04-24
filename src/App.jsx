import Navbar from "./components/navbar/Navbar";
import "./app.scss";

const App = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>Parallax</section>
      <section>services</section>
      <section>Parallax</section>
      <section>portfolio1</section>
      <section>portfolio2</section>
      <section>portfolio3</section>
      <section>contact</section>
    </div>
  );
};

export default App;
