const roundFix = (() => {
  let accum = 0;
  return (n) => {
    let rounded = accum > 0 ? Math.ceil(n) : Math.floor(n);
    console.log({ n, accum, rounded });
    accum += n - rounded;
    return rounded;
  };
})();

roundFix(2.5);
roundFix(2.3);
roundFix(2.1);
roundFix(2.7);
roundFix(2.8);
roundFix(2.4);
roundFix(2.1);
