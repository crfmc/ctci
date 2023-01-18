const Graph = require('../Graph');

/**
 * Here I create a graph for Testing
*/
// ["A","B","C","D","E","Z"]
let test_graph_0 = new Graph();
let A = test_graph_0.addNodeWithName("A");
let B = test_graph_0.addChildGNodeVal("B", A);
let C = test_graph_0.addChildGNodeVal("C", A);

let D = test_graph_0.addChildGNodeVal("D", C);
let E = test_graph_0.addChildGNodeVal("E", D);
E.addChildGN(C);

let Z = test_graph_0.addNodeWithName("Z");

module.exports = {
    test_graph_0
}