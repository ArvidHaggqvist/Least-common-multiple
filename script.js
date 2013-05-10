/* A small function to find the least common multiple for a series of specified numbers */

function lcm(arr) {
    var remainder = 0, remainderTwo = 0;
    var l = arr.length;
    for(i=0;i<l;i++) {
        remainder = arr[i] % arr[i + 1];
        if(remainder === 0) {
            arr[i + 1] = (arr[i] * arr[i+1]) / arr[i + 1];
        }
        else {
            remainderTwo = arr[i + 1] % remainder;
            if(remainderTwo === 0) {
                arr[i + 1] = (arr[i] * arr[i + 1]) / remainder;
            }
            else {
                arr[i+1] = (arr[i] * arr[i + 1]) / remainderTwo;
            }
        }
    }
    return arr[l - 1];
}
console.log(lcm([10,9,8,7,6,5,4,3,2,1])); // => 2520