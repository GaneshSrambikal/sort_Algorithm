// const arr = [1, 2, 4, 6, 8, 7];
// const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
// const left = arr.slice(0, middle) // items on the left side
// const right = arr.slice(middle)
// const arrSlice = arr.pop();
// console.log(arrSlice);
// const arr = [23, 4, 5, 2, 8]
// const poped = arr.pop();
// console.log(arr);
//merge sort practices

//
// const list = [6, 7, 2, 3, 8, 5]
// const spec = list.splice(1, 3)
// console.log(list)

//insertion sort
function insertionSort(items) {
    for (var i = 1; i < items.length; i++) {
        let value = items[i]
        for (var j = i - 1; j > -1 && items[j] > value; j--) {
            items[j + 1] = items[j]
        }
        items[j + 1] = value
    }
    return items
}

const list = [6, 4, 9, 3, 1, 5, 7, 8, 2]
console.log(insertionSort(list))