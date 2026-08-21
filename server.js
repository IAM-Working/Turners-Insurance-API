
const express = require("express");
const carValue = require("./tests/api-1/carValue");
const app = express();

app.use(express.json());

app.post("/api-1", (req, res) => {
  const { model, year } = req.body;

  try {
    const value = carValue(model, year);

    res.json({
      car_value: value
    });
  } catch (error) {
    res.status(400).json({
      error: "there is an error"
    });
  }
});

module.exports = app;