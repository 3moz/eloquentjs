var arrays = [[1, 2, 3], [4, 5], [6]];

var flatten = arr => arr.reduce( //works
    (accumulator, value) => accumulator.concat(
        Array.isArray(value) ? flatten(value) : value
    ),
    []
);

console.log(arrays)
console.log(flatten(arrays))
console.log(flatten2(arrays))