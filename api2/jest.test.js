import { calculateriskRating } from "./api2.js";

describe("risk rating calc", () => {
  test("return rating 3", () => {
    const result = calculateriskRating(
      "crash scratch bump"
    );

    expect(result).toEqual({
      risk_rating: 3
    });
  });

  test("return rating 1", () => {
    const result = calculateriskRating(
      "cash scratch bum"
    );

    expect(result).toEqual({
      risk_rating: 1
    });
  });

  test("null error", () => {
    const result = calculateriskRating(null);

    expect(result).toEqual({
      error: "there is an error"
    });
  });

  test("number error", () => {
    const result = calculateriskRating(123);

    expect(result).toEqual({
      error: "there is an error"
    });
  });

  test("ignore number within valid text", () => {
    const result = calculateriskRating(
      "1234 crash bump scratch"
    );

    expect(result).toEqual({
      risk_rating: 3
    });
  });
});