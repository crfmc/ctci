const MinHeap = require('../lib/MinHeap');

/**
 * Notes:
 */
const Problem1 = (s) => {
  return "unimplemented"
}

console.log('Problem 1 tests running... \n');

const mh = new MinHeap();

for (i = 10; i <= 150; i = i + 10) {
  mh.add(i);
}

mh.add(5, true);

console.log(mh.heap)

module.exports;

/**
 * Notes:
 */
