import Accordian from "./components/accordian/Accordian.jsx";
import RandomColor from "./components/random_color/RandomColor.jsx";
import StarRating from "./components/star_rating/StarRating.jsx"
import SlidingWindow from "./components/sliding_window/SlidingWindow.jsx"
import SlidingWindowUsingFetch from "./components/sliding_window/SlidingWindowUsingFetch.jsx";
import LoadMore from "./components/load_more/LoadMore.jsx";
import TreeMenu from "./components/tree_menu/TreeMenu.jsx"
import QRcode from "./components/qr_code/QRcode.jsx"
import ThemeChange from "./components/theme_change/ThemeChange.jsx"
import TabsData from "./components/tabs/TabsData.jsx"
import Tabs from "./components/tabs/Tabs.jsx";
import Modal_Temp from "./components/modal_template/Modal_Temp.jsx"
import GithubProfileFinder from "./components/github_profile_finder/GithubProfileFinder.jsx"
import SearchAutoComplete from "./components/search_autocomplete/SearchAutoComplete.jsx";
import TicTacToe from "./components/tic_tac_toe/TicTacToe.jsx"
import FeatureFlag from "./components/featureFlag/FeatureFlag.jsx";

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

      {/* <section>
        <TreeMenu />
      </section> */}

      <section>
        <QRcode />
      </section>

      <section>
        <ThemeChange />
      </section>

      {/* <section>
        <Infinite_Scroll />
      </section> */}

      <section>
        <Tabs data={TabsData}/>
      </section>
        <p>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
      <section>
        <Modal_Temp  header={"Header"} body={"Body"} footer={"Footer"}/>
      </section>

      <section>
        <GithubProfileFinder />
      </section>
      
      <section>
        <SearchAutoComplete />
      </section>

      <section>
        <TicTacToe />
      </section>

      {/* <section>
        <FeatureFlag />
      </section> */}
    </div>
  );
}

export default App;