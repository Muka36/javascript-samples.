var maths = Math.max(2, 4, 5, 6, 6, 10);
console.log(maths);

var myobj = {};

Object.assign(myobj, {k:3, m:"karthic"});
console.log(myobj);


function someone (a, b) {
    return a + b;
}

var kar  = [5, 4];
console.log(someone(...kar)); /// spread op : separate the array into individual values.

function sumtwo (a, b, ...args) { /// rest operator : bind the individual values into array.

    let multi = a*b;

    let sum = 0;
    for (const arg of args) {
        sum +=arg;
        
    }
    return [ sum, multi];
}
console.log(sumtwo(1, 2, 4, 5, 9));