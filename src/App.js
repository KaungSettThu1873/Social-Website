import "./App.css";
import NavBar from "./Components/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import LeftSideBar from "./Components/LeftSideBar";
import RightSideBar from "./Components/RightSideBar";
import MidBar from "./Components/MidBar";

function App() {
  return (
    <div className=" bg-light">
      <NavBar />
      <div className="row ">
        <LeftSideBar />
        <MidBar />
        <RightSideBar />
      </div>
    </div>
  );
}

export default App;
