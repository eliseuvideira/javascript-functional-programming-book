const shuffle = require("./shuffle");

describe("shuffle", () => {
  it("shouldn't change the array length", () => {
    const arr = [2, true, "hello", {}, [2]];
    const len = arr.length;
    shuffle(arr);
    expect(arr.length).toBe(len);
  });

  it("shouldn't change the values", () => {
    const arr = [2, true, "hello"];
    shuffle(arr);
    expect(arr.includes(2)).toBe(true);
    expect(arr.includes(true)).toBe(true);
    expect(arr.includes("hello")).toBe(true);
  });
});
