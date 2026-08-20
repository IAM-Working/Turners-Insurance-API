// import request from "supertest";
const request = require("supertest");
const app = require("./server");

describe("POST /api-1", () => {
  test("should return car value for Civic 2014", async () => {
    const response = await request(app)
      .post("/api-1")
      .send({
        model: "Civic",
        year: 2014
      });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      car_value: 6614
    });
  });
});