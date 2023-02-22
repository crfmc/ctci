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

// [1,2,3,4,5,6,7,8]
let test_graph_01 = new Graph();
let n1 = test_graph_01.addNodeWithName("1");

let n2 = test_graph_01.addChildGNodeVal("2", n1);
let n4 = test_graph_01.addChildGNodeVal("4", n2);
let n5 = test_graph_01.addChildGNodeVal("5", n2);

let n3 = test_graph_01.addChildGNodeVal("3", n1);
let n6 = test_graph_01.addChildGNodeVal("6", n3);
let n7 = test_graph_01.addChildGNodeVal("7", n3);


module.exports = {
    test_graph_0,
    test_graph_01
}