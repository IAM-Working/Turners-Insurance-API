import express from "express";
import { calculateriskRating } from "./api2.js";

const app = express();
const PORT = 5000;

app.use(express.json());

app.post("/api/risk-rating", (req, res) => {
  const result = calculateriskRating(
    req.body.claim_history
  );

  if (result.error) {
    return res.status(400).json(result);
  }

  return res.status(200).json(result);
});

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;