import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://natalialloyd.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Natalia Lloyd{" "}
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/natallo7/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
