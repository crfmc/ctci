const BTreeNode = require('./BTreeNode');


/**
 * class MaxHeapNode is a variation of a BSTreeNode. It represents a
 * Binary Tree,
 */
class MaxHeap {
    constructor(val) {
        this.heap = [];
        this.n = 0;
    }
    // Swap the value in the two given indexes of an array
    swap(idx1, idx2) {
        let aux = this.heap[idx1];
        this.heap[idx1] = this.heap[idx2];
        this.heap[idx2] = aux;
    }

    // bubble down the last element in the heap
    bubbleDown(nIdx) {
        // console.log(nIdx);
        let nVal = this.heap[nIdx];
        // console.log(nVal);
        let parentIdx = Math.floor((nIdx - 1) / 2);
        let parentVal = this.heap[parentIdx];
        console.log(parentIdx)

        while (nVal > 0 && parentVal >= nVal) {
            this.swap(nIdx, parentIdx)
            parentIdx = Math.floor(2*parentIdx + 1);
            parentVal = this.heap[parentIdx];
        }
    }
    
    // Insert a value into the max-heap
    insert(val) {
        this.heap[this.n] = val;
        this.n++;
        this.bubbleUp(this.n - 1);
    }
    poll() {

    }
}


module.exports = MaxHeap;