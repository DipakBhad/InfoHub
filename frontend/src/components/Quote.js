import { useState } from "react";
import axios from "axios";

function Quote() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    const res = await axios.get("http://localhost:5000/api/quote");
    setQuote(res.data.quote);
    setLoading(false);
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
