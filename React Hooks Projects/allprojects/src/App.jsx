import Accordian from "./components/accordian/Accordian.jsx";
import RandomColor from "./components/random_color/RandomColor.jsx";
import StarRating from "./components/star_rating/StarRating.jsx"
import SlidingWindow from "./components/sliding_window/SlidingWindow.jsx"


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

      <section>
        <SlidingWindow/>
      </section>
    </div>
  );
}

export default App;