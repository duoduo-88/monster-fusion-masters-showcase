// A generic way to represent six possible rotations of a hex tile.
// This is only orientation data; it contains no tile attributes, matching,
// fusion effects, placement validation, or game-specific behavior.

const EDGE_NAMES = Object.freeze([
  "north-east", "east", "south-east",
  "south-west", "west", "north-west",
]);

function normalizeRotation(steps) {
  return ((steps % EDGE_NAMES.length) + EDGE_NAMES.length) % EDGE_NAMES.length;
}

function rotateEdge(edgeIndex, clockwiseSteps = 1) {
  return (edgeIndex + normalizeRotation(clockwiseSteps)) % EDGE_NAMES.length;
}

function orientedEdges(localEdges, clockwiseSteps = 0) {
  const result = Array(EDGE_NAMES.length);
  localEdges.forEach((value, localIndex) => {
    result[rotateEdge(localIndex, clockwiseSteps)] = value;
  });
  return result;
}

const exampleEdges = ["A", "B", "C", "D", "E", "F"];
console.log("one clockwise step:", orientedEdges(exampleEdges, 1));
console.log("edge 0 after two steps:", EDGE_NAMES[rotateEdge(0, 2)]);

