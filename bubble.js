//func takes arr to sort
function bubbleSort(arr) {
    var length = arr.length,
        stop, i, j
    //the outer loop that specify the passes through the arr
    for (i = 0; i < length; i++) {
        //inner loop decides till where the loop will work
        for (j = 0, stop = length - i; j < stop; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)//passing the values to swap
            }
        }
    }

    return arr
}
//swaps and return 
function swap(arr, firstIndex, secondIndex) {
    var temp = arr[firstIndex]
    arr[firstIndex] = arr[secondIndex]
    arr[secondIndex] = temp

}
const list = [56, 85, 47, 21, 3, 22]

console.log(bubbleSort(list))