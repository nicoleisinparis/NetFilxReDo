import "./App.css";
import data from "./assets/data.json";
import Movie from "./assets/components/Movie";
import Title from "./assets/components/Title";
import Content from "./assets/components/Content";
function App() {
  return (
    <>
      <section>
        <div className="word">
          <div className="high1">N</div>
          <div className="high">E</div>
          <div className="mid1">T</div>
          <div className="mid">F</div>
          <div className="mid1">L</div>
          <div className="high">I</div>
          <div className="high1">X</div>
        </div>
        {/* <Title/>
        <Movie /> */}
        <Content />
      </section>
    </>
  );
}

export default App;
