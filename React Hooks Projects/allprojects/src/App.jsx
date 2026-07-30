import Accordian from "./components/accordian/Accordian.jsx";
import RandomColor from "./components/random_color/RandomColor.jsx";
import StarRating from "./components/star_rating/StarRating.jsx"
import SlidingWindow from "./components/sliding_window/SlidingWindow.jsx"
import SlidingWindowUsingFetch from "./components/sliding_window/SlidingWindowUsingFetch.jsx";
import LoadMore from "./components/load_more/LoadMore.jsx";


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
        <SlidingWindow />
      </section>
      
      <section>
        <SlidingWindowUsingFetch page={2} limit={10} />
      </section>
      
      <section>
        <LoadMore limit={100} />
      </section>
    </div>
  );
}

export default App;