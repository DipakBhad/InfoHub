import { useState } from "react";
import axios from "axios";

function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError("");
    setData(null);
    try {
      const res = await axios.get(`http://localhost:5000/api/weather?city=${city}`);
      setData(res.data);
    } catch {
      setError("City not found or API error");
    }
    setLoading(false);
  };

  return (
    <div className="text-center">
      <h3 className="mb-3">Weather Information</h3>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn btn-primary" onClick={fetchWeather}>
          Get Weather
        </button>
      </div>

      {loading && <div className="spinner-border text-primary" role="status"></div>}
      {error && <p className="text-danger">{error}</p>}
      {data && (
        <div className="alert alert-success mt-3">
          <h5>{city.toUpperCase()}</h5>
          <p className="mb-0">
            🌡 {data.temp}°C <br />
            ☁️ {data.description}
          </p>
        </div>
      )}
    </div>
  );
}

export default Weather;
