const sumAll = function (x, y) {
  if (x < 0 || y < 0) return "ERROR";
  if (!Number.isInteger(x) || !Number.isInteger(y)) return "ERROR";
  if (x > y) {
    const temp = x;
    x = y;
    y = temp;
  }
  var numbers = [];

  for (var i = x; i <= y; i++) {
    numbers.push(i);
  }
  return numbers.reduce((acc, curr) => acc + curr);
};

// Do not edit below this line
module.exports = sumAll;
