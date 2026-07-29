import Accordian from "./components/accordian/Accordian.jsx";
import RandomColor from "./components/random_color/RandomColor.jsx";
import StarRating from "./components/star_rating/StarRating.jsx"


function App() {
  return (
    <div>
      <section>
        <Accordian />
      </section>

      <section>
        <RandomColor />
      </section>
     
      <section>
        <StarRating />
      </section>
    </div>
  );
}

export default App;