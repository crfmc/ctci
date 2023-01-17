const BTreeNode = require('./BTreeNode');


/**
 * The class MinHeapNode is a variation of a BSTreeNode. It represents a
 * Complete Binary Tree where each node is smaller than its children. The
 * root node (position 0) is the minimum value in the tree.
 * 
 * Invariant: 
 * - Every level of the tree (except last) is completely filled. All holes 
 *   in the last level are all the way to the right.
 * - Every element in tree is less than or equal to its parent. 
 */
class MinHeap {
    constructor() {
        this.heap = [];
        this.n = 0;
    }
    // Swap the value in the two given indexes of an array
    swap(idx1, idx2) {
        let aux = this.heap[idx1];
        this.heap[idx1] = this.heap[idx2];
        this.heap[idx2] = aux;
    }

    // bubble up the last element in the heap
    bubbleUp(nIdx, verbose=false) {
        
        let nVal = this.heap[nIdx]; // 0
        let parentIdx = Math.floor((nIdx - 1) / 2); // 2
        let parentVal = this.heap[parentIdx]; // 1


        

        while (nVal >= 0 && parentVal >= nVal) {
            this.swap(nIdx, parentIdx);
            if(verbose) console.log(nVal, parentVal);
            parentIdx = Math.floor(2*parentIdx + 1);
            parentVal = this.heap[parentIdx];
        }
    }
    
    // Insert a value into the min-heap
    add(val, verbose=false) {
        this.heap[this.n] = val;
        this.n++;
        this.bubbleUp(this.n - 1, verbose);
    }
    poll() {
        return "unimplemented"
    }
    peek() {
        return "unimplemented"
    }
    print() {
        
        const maxStrLen = this.heap[this.n - 1].toString().length;
        const numNodes = this.n + 1;

        const w = 4 * (maxStrLen + 1);
        
        let row = 0;
        // Print each value on the heap
        for (let i=0; i < this.n; i++) {
            // console.log(this.heap[i]);

        }

        


        return this.heap;
    }
}


module.exports = MinHeap;