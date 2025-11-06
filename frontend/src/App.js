import { useState } from "react";
import Weather from "./components/Weather";
import Converter from "./components/Converter";
import Quote from "./components/Quote";

function App() {
  const [tab, setTab] = useState("weather");

  return (
    <div className="container py-4">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded-3 mb-4 shadow-sm">
        <div className="container-fluid">
          <span className="navbar-brand fw-bold">🌐 InfoHub</span>
          <div>
            <button
              className={`btn btn-light mx-1 ${tab === "weather" ? "active" : ""}`}
              onClick={() => setTab("weather")}
            >
              Weather
            </button>
            <button
              className={`btn btn-light mx-1 ${tab === "converter" ? "active" : ""}`}
              onClick={() => setTab("converter")}
            >
              Currency
            </button>
            <button
              className={`btn btn-light mx-1 ${tab === "quote" ? "active" : ""}`}
              onClick={() => setTab("quote")}
            >
              Quotes
            </button>
          </div>
        </div>
      </nav>

      <div className="d-flex justify-content-center">
        <div className="card shadow-lg p-4" style={{ width: "500px" }}>
          {tab === "weather" && <Weather />}
          {tab === "converter" && <Converter />}
          {tab === "quote" && <Quote />}
        </div>
      </div>
    </div>
  );
}

export default App;
