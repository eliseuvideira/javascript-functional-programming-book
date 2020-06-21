const once = require("./once");

describe("once", () => {
  const obj = {};

  beforeEach(() => {
    obj.fn = () => {};
    spyOn(obj, "fn");
  });

  test("always runs", () => {
    expect.assertions(1);
    const fn = obj.fn;
    fn();
    fn();
    fn();
    expect(fn).toHaveBeenCalledTimes(3);
  });

  test("with 'once' it runs one time", () => {
    expect.assertions(2);
    obj.onceFn = once(obj.fn);
    spyOn(obj, "onceFn").and.callThrough();
    const { onceFn, fn } = obj;
    onceFn();
    onceFn();
    onceFn();
    expect(onceFn).toHaveBeenCalledTimes(3);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
