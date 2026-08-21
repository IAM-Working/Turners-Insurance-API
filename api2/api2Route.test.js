import request from "supertest";
import app from "./jackserver.js";

describe("POST /api/risk-rating", () => {
  test("returns risk rating 3", async () => {
    const response = await request(app)
      .post("/api/risk-rating")
      .send({
        claim_history: "crash scratch bump"
      });

    expect(response.statusCode).toBe(200);

    expect(response.body).toEqual({
      risk_rating: 3
    });
  });

  test("returns an error for number input", async () => {
    const response = await request(app)
      .post("/api/risk-rating")
      .send({
        claim_history: 123
      });

    expect(response.statusCode).toBe(400);

    expect(response.body).toEqual({
      error: "there is an error"
    });
  });
});