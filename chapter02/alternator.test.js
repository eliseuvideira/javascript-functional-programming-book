const alternator = require("./alternator");

describe("alternator", () => {
  it("should alternate calls", () => {
    expect.assertions(8);
    const obj = {};
    obj.fn1 = () => {};
    spyOn(obj, "fn1");
    obj.fn2 = () => {};
    spyOn(obj, "fn2");
    obj.alternateFn = alternator(obj.fn1, obj.fn2);
    const { alternateFn, fn1, fn2 } = obj;

    alternateFn();

    expect(fn1).toHaveBeenCalledTimes(1);
    expect(fn2).toHaveBeenCalledTimes(0);

    alternateFn();
    expect(fn1).toHaveBeenCalledTimes(1);
    expect(fn2).toHaveBeenCalledTimes(1);

    alternateFn();
    expect(fn1).toHaveBeenCalledTimes(2);
    expect(fn2).toHaveBeenCalledTimes(1);

    alternateFn();
    expect(fn1).toHaveBeenCalledTimes(2);
    expect(fn2).toHaveBeenCalledTimes(2);
  });
});
