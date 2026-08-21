import express from "express";
import quoteCalc from "./Test_api3/quoteCalc.js";
const app = express();
app.use(express.json());
const PORT = 5000;

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







































app.post("/api/3", (req, res) => {
  const { car_value, car_risk } = req.body;
  const result = quoteCalc(car_value, car_risk);
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
module.exports = app;
