var isuser =  (element) => {

//    var app = parseInt(element)

    // if (element % 2 == 0) {
    //     console.log(true);

    // }
    // return false;

    return element % 2 ==0;
}

// console.log(isuser(3));

// console.log(isuser("2"));

var resutl = [2, 4, 6, 8, 10].every((f) =>  (f % 2 ==0))
console.log(resutl);