import { useState } from "react";
import axios from "axios";
const API_BASE_URL = "https://infohub-xp99.onrender.com";

function Converter() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const convert = async () => {
    if (!amount) return;
    setLoading(true);
    try {
      const res = await axios.get(
        `${API_BASE_URL}/api/convert?amount=${amount}&to=${currency}`
      );
      setResult(res.data.converted);
    } catch {
      setResult("Error converting");
    }
    setLoading(false);
  };

  return (
    <div className="text-center">
      <h3 className="mb-3">Currency Converter</h3>
      <div className="input-group mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Enter amount in INR"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          className="form-select"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
        <button className="btn btn-primary" onClick={convert}>
          Convert
        </button>
      </div>

      {loading && <div className="spinner-border text-primary" role="status"></div>}
      {result !== null && (
        <div className="alert alert-info mt-3">
          💰 Converted Value: <strong>{result}</strong>
        </div>
      )}
    </div>
  );
}

export default Converter;
