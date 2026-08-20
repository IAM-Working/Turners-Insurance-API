import express from "express";
import quoteCalc from "./Test_api3/quoteCalc.js";
const app = express();
app.use(express.json());
const PORT = 5000;












































app.post("/api/3", (req, res) => {
  const { car_value, car_risk } = req.body;
  const result = quoteCalc(car_value, car_risk);
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
