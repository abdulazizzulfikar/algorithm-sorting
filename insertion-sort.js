// define a new array
const arr = [1, 2, 3, 5, 6, 7, 2, 53, 1, 225, 232];

// iterate the array
for (i = 1; i < arr.length; i++) {
    // start from index 1
    // cuz we dunno the value of index 1 was greater than others
    // or smaller than others
    
    var current = arr[i];
    var j = i - 1;

    while (j >= 0 && arr[j] > current) {
        arr[j+1] = arr[j];
        j--;
    }

    arr[j + 1] = current;
}

console.log(arr);