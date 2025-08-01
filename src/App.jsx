import "./App.css";
import reactLogo from "./assets/react.svg"; 
import react_icon from "./assets/react_icon.svg";
function App() {
  return (
    <div className="container">
      <header>
        <img src={reactLogo} className="logo" alt="React logo" />
        <h1 className="brand">React Facts</h1>
      </header>
      <main>
        <h2 className="title">Fun facts about React</h2>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 200K stars on GitHub</li>
          <li>Is maintained by Meta</li>
          <li>
            Powers thousands of enterprise apps, including mobile apps
          </li>
        </ul>
        <img src={react_icon} className="bg-logo" alt="React_icon" />
      </main>
    </div>
  );
}

export default App;
