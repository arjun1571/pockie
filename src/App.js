import "./App.css";
import Categories from "./Component/Nav/Categories/Categories";
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
    </div>
  );
}

export default App;
