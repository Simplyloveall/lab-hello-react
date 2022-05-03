import "./App.css";
import computerIcon from "./images/computerIcon";
import fileIcon from "./images/file-icon";
import iHack from "./images/i-hack-1";
import menuIcon from "./images/menu-icon";
import monitorIcon from "./images/monitor-icon";
import wrenchIcon from "./images/wrench-icon";

function App() {
  return (
    <div className="App">
      <div>
        <img src={iHack} />
        <img src={menuIcon} />

        <h1>Say hello to ReactJS</h1>
        <h5>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer.
        </h5>
        <button>
          <a href="">Awesome</a>
        </button>
      </div>

      <div>
        <img src={wrenchIcon} />
        <h4>Declarative</h4>
        <p>React makes it painless to create interactive UIs.</p>
        <img src={computerIcon} />
        <h4>Components</h4>
        <p>Build encapsulated components that manage their state.</p>
        <img src={monitorIcon} />
        <h4>Single-Way</h4>
        <p>A set of immutable values are passed to the component's.</p>
        <img src={fileIcon} />
        <h4>JSX</h4>
        <p>Statically typed, Designed to run on modern browsers.</p>
      </div>
    </div>
  );
}

export default App;
