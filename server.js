import express from "express";
import carValue from "./tests/api-1/carValue.js";
import quoteCalc from "./Test_api3/quoteCalc.js";

const app = express();

app.use(express.json());

app.post("/api-1", (req, res) => {
  const { model, year } = req.body;

  try {
    const value = carValue(model, year);

    res.status(200).json({
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

export default app;