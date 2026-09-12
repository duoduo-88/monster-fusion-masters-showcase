// A small, generic axial-coordinate helper for a pointy-top hex grid.
// It demonstrates coordinate conversion and neighborhood lookup only;
// it does not define a board, legal moves, or any Monster Fusion Masters rules.

const HEX_DIRECTIONS = Object.freeze([
  [1, 0], [1, -1], [0, -1],
  [-1, 0], [-1, 1], [0, 1],
]);

function axialToPixel(q, r, size) {
  return {
    x: size * Math.sqrt(3) * (q + r / 2),
    y: size * 1.5 * r,
  };
}

function hexDistance(a, b) {
  const dq = a.q - b.q;
  const dr = a.r - b.r;
  return (Math.abs(dq) + Math.abs(dr) + Math.abs(dq + dr)) / 2;
}

function hexNeighbors({ q, r }) {
  return HEX_DIRECTIONS.map(([dq, dr]) => ({ q: q + dq, r: r + dr }));
}

const sample = { q: 2, r: -1 };
console.log("pixel:", axialToPixel(sample.q, sample.r, 24));
console.log("neighbors:", hexNeighbors(sample));
console.log("distance from origin:", hexDistance(sample, { q: 0, r: 0 }));

