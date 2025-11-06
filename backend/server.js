const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Use dynamic port (for Render)
const PORT = process.env.PORT || 5000;

// Weather API
app.get("/api/weather", async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: "City is required" });

  try {
    const apiKey = process.env.OPENWEATHER_API_KEY || "YOUR_OPENWEATHER_API_KEY";
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    res.json({
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
    });
  } catch (err) {
    res.status(500).json({ error: "Unable to fetch weather data" });
  }
});

// Currency Conversion API (mocked rates)
app.get("/api/convert", (req, res) => {
  const { amount, to } = req.query;
  if (!amount || !to)
    return res.status(400).json({ error: "Amount and currency required" });

  const rates = { USD: 0.012, EUR: 0.011 };
  const converted = amount * (rates[to.toUpperCase()] || 0);
  res.json({ converted });
});

// Motivational Quote API
app.get("/api/quote", (req, res) => {
  const quotes = [
    "Believe you can and you're halfway there.",
    "Do something today that your future self will thank you for.",
    "Don’t watch the clock; do what it does. Keep going.",
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: randomQuote });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
