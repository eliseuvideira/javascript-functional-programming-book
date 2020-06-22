const roundFixPure = ({ number, remaining }) => {
  const newNumber = remaining > 0 ? Math.ceil(number) : Math.floor(number);
  const newRemaining = remaining + number - newNumber;
  return { number: newNumber, remaining: newRemaining };
};

module.exports = roundFixPure;
