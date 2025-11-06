import { useState } from "react";
import axios from "axios";

const API_BASE_URL = "https://infohub-xp99.onrender.com"; // your backend URL

function Quote() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_BASE_URL}/api/quote`); // ✅ use backticks here
      setQuote(res.data.quote);
    } catch (err) {
      console.error("Error fetching quote:", err);
      alert("Failed to fetch quote. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center">
      <h3 className="mb-3">Motivational Quote</h3>
      <button className="btn btn-success mb-3" onClick={fetchQuote}>
        Get Quote
      </button>
      {loading && <div className="spinner-border text-success" role="status"></div>}
      {quote && <blockquote className="blockquote mt-3">“{quote}”</blockquote>}
    </div>
  );
}

export default Quote;
