import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-wrapper">
        <SideBar />
        <Main />
      </div>
    </div>
  );
}

export default App;
