
// add function, adds numbers and calls callback
const add = function(num1, num2, callback, times) {
    sum = num1 + num2;

    callback(times, sum);
}

// example of callback which is not linked with object
// multiply specifc num (this.sum) to `times`
function product(times,sum) {
    console.log(times * sum);
}



// add 1 and 1 and then multiply their sum with 3
add(1, 1, product, 3)
