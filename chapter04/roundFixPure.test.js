const roundFixPure = require("./roundFixPure");

describe("roundFixPure", () => {
  it("should round 3.1 to 3 if differences are 0", () => {
    const { remaining, number } = roundFixPure({
      remaining: 0.0,
      number: 3.1,
    });
    expect(remaining).toBeCloseTo(0.1);
    expect(number).toBe(3);
  });

  it("should round 2.85 to 3 if differences are 0.1", () => {
    const { remaining, number } = roundFixPure({
      remaining: 0.1,
      number: 2.85,
    });
    expect(remaining).toBeCloseTo(-0.05);
    expect(number).toBe(3);
  });

  it("should round 2.7 to 2 if differences are -0.15", () => {
    const { remaining, number } = roundFixPure({
      remaining: -0.15,
      number: 2.7,
    });
    expect(remaining).toBeCloseTo(0.55);
    expect(number).toBe(2);
  });

  it("should round 3.15 to 4 if differences are 0.55", () => {
    const { remaining, number } = roundFixPure({
      remaining: 0.55,
      number: 3.15,
    });
    expect(remaining).toBeCloseTo(-0.30);
    expect(number).toBe(4);
  });
});
