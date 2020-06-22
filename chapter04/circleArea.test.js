const circleArea = require("./circleArea");

describe("circleArea", () => {
  it("is PI for radius 1", () => {
    expect.assertions(1);
    const area = circleArea(1);
    expect(area).toBeCloseTo(Math.PI);
  });

  it("is approx. 12.5664 for radius 2", () => {
    expect.assertions(1);
    const area = circleArea(2);
    expect(area).toBeCloseTo(12.5664);
  });
});
