// Calc have add function which after adding calls a callback which uses a specific scope

// Object Prototype
function Calc(num1,num2) {
    this.num1 = num1;
    this.num2 = num2;
    this.sum = 0;

}

// add function, adds numbers and calls callback
Calc.prototype.add = function(callback, times) {
    this.sum = this.num1 + this.num2;

    // Call our callback, but using our own instance as the context
    callback.call(this, times);
}

// example of callback which is linked with object
// multiply specifc num (this.sum) to `times`
function product(times) {
    console.log(times * this.sum);
}

var adr = new Calc(1,1)

// add 1 and 1 and then multiply their sum with 3
adr.add(product,3)
