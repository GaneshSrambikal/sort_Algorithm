function insertionSort(items) {
    for (var i = 1; i < items.length; i++) {
        let value = items[i]
        // store the current item value so it can be placed right
        for (var j = i - 1; j > -1 && items[j] > value; j--) {
            // loop through the items in the sorted array (the items from the current to the beginning)
            // copy each item to the next one
            items[j + 1] = items[j]
        }
        // the last item we've reached should now hold the value of the currently sorted item
        // items[j + 1] = value
    }

    return list
}

const list = [3, 2, 8, 4, 3, 1]
console.log(insertionSort(list))

//use splice function 
function insertion_Sort(arr) {
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < arr[0]) {
            //move current element to the first position
            arr.unshift(arr.splice(i, 1)[0]);
        }
        else if (arr[i] > arr[i - 1]) {
            //leave current element where it is
            continue;
        }
        else {
            //find where element should go
            for (var j = 1; j < i; j++) {
                if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
                    //move element
                    arr.splice(j, 0, arr.splice(i, 1)[0]);
                }
            }
        }
    }
    return arr;
}

console.log(insertion_Sort([3, 0, 2, 5, -1, 4, 1]));