// define a new array
const arr = [1, 2, 3, 5, 6, 7, 2, 53, 1, 225, 232];

// iterate the array
for(a=0; a <= arr.length -1; a++) {

    // scanning the particular array and swap
    // if the next element was greater than current element
    
    // note : the array will iterate according on the index of element
    for (i = 0; i <= arr.length - 2; i++) {
        if (arr[i] > arr[i + 1]) {
            currTemp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = currTemp;
        }
    }

}

console.log(arr);
