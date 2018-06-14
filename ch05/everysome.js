function test(item) {
    return item > 4;
}

function every(arr, test) {
    for (var i = 0; i < arr.length; i++) {
        if (!test(arr[i])) {
            return false
        }
    } return true
}

function some(arr, test) {
    for (var i = 0; i < arr.length; i++) {
        if (test(arr[i])) {
            return true
        }
    } return false
}

console.log(every([5,6,10,8,9],test))
console.log(some([0,0,0,1,2,3,3],test)) 