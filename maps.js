var mymap = new Map();

mymap.set(4, "karthick");
mymap.set(3, "muthu" );
mymap.set(5, "mk");
mymap.set(6, "thamo");

console.log(mymap);


for(let key of mymap.keys()){
    console.log(`key is ${key}`)
}
for(let value of mymap.values()){
    console.log(`value is ${value}`)
}

for(let [key, value ] of mymap){
    console.log(`key is: ${key}, value is: ${value}`)
}

mymap.forEach((key, value) => console.log (`${key} and ${value}`))

mymap.delete(6);
console.log(mymap);