console.log("Before delay");

function delayBySeconds(sec) {
let start = now = Date.now()
while(now-start < (sec*1000)) {
	now = Date.now();
}
}

delayBySeconds(1);

// Executes after delay of 5 seconds
console.log("After delay");



const uno = () => {
    console.log("hiee")
}

const docs = () => {
    setTimeout(() => {
        console.log("wohhoooo");
    }, 3000)
    console.log("byee")
}

uno();
docs();