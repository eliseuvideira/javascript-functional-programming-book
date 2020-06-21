const onceAndAfter = require("./onceAndAfter");

describe("onceAndAfter", () => {
  it("should call the first function only once, and then only the other", () => {
    expect.assertions(8);
    const obj = {};
    obj.fn1 = () => {};
    spyOn(obj, "fn1");
    obj.fn2 = () => {};
    spyOn(obj, "fn2");
    obj.onceFn = onceAndAfter(obj.fn1, obj.fn2);
    const { onceFn, fn1, fn2 } = obj;

    onceFn();

    expect(fn1).toHaveBeenCalledTimes(1);
    expect(fn2).toHaveBeenCalledTimes(0);

    onceFn();
    expect(fn1).toHaveBeenCalledTimes(1);
    expect(fn2).toHaveBeenCalledTimes(1);

    onceFn();
    expect(fn1).toHaveBeenCalledTimes(1);
    expect(fn2).toHaveBeenCalledTimes(2);

    onceFn();
    expect(fn1).toHaveBeenCalledTimes(1);
    expect(fn2).toHaveBeenCalledTimes(3);
  });
});
