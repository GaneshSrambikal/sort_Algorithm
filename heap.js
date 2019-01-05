function buildMaxHeap(array) {
    var i;
    i = array.length / 2 - 1;
    i = Math.floor(i);

    // Build a max heap out of
    // all array elements passed in.
    while (i >= 0) {
        heapify(array, i, array.length);
        i -= 1;
    }
    function heapify(heap, i, max) {
        var index, leftChild, righChild;

        while (i < max) {
            index = i;

            leftChild = 2 * i + 1;
            righChild = leftChild + 1;

            if (leftChild < max && heap[leftChild] > heap[index]) {
                index = leftChild;
            }

            if (righChild < max && heap[righChild] > heap[index]) {
                index = righChild;
            }

            if (index == i) {
                return;
            }

            swap(heap, i, index);

            i = index;
        }
    }
    function swap(array, firstItemIndex, lastItemInde) {
        var tmp = array[firstItemIndex];

        // Swap first and last items in the array.
        array[firstItemIndex] = array[lastItemInde];
        array[lastItemInde] = tmp;
    }
    return array
}



const list = [14, 9, 5, 2, 7, 8, 3, 6, 1]


console.log(buildMaxHeap(list))