import "./App.css";
import Categories from "./Component/Nav/Categories/Categories";
import Hdeal from "./Component/Nav/HotDeal/Hdeal";
import Navbar2 from "./Component/Nav/Nab2/Navbar2";
import Navbar from "./Component/Nav/Navbar";
import Shop from "./Component/Nav/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Navbar2></Navbar2>
      <Shop></Shop>
      <Categories></Categories>
      <Hdeal></Hdeal>
    </div>
  );
}

export default App;
