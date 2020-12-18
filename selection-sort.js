// define a new array
const arr = [1,2,3,5,6,7,2,53,1,225,232];

// iterating the array
arr.forEach((v,k) => {
    // define variable to store the current position and minimum array value
    let currPos = 0;
    let minVal = v;
    // iterating to find and compare next element and so on with
    // current min value
    for(i = k+1; i <= arr.length - 1; i++) {
        if(arr[i] < minVal)
        {
            currPos = i;
            minVal = arr[i];
        }
    }

    // if the minval was modified (means we find the minimum element)
    // then swap the current position with the min position
    if(minVal != v)
    {
        arr[k] = minVal;
        arr[currPos] = v;
    }
});

console.log(arr);

