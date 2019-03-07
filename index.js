
function sum(fromN, toN) {
  console.log(`fromN: ${fromN} toN:${toN}`);
  if (fromN >= toN) {
    return toN;
  }
  else {
    return fromN + sum(1 + fromN, toN);
  }
}

module.exports = sum;
