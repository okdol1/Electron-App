import "./App.css";
import TitleBar from "./components/TitleBar";
import SideBar from "./components/SideBar";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <TitleBar />
      <div className="main-wrapper">
        <SideBar />
        <Main />
      </div>
    </div>
  );
}

export default App;
