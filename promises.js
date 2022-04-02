const uno = () => {
    return "i am one"
}

const tress =  () => {
     return new Promise((resolve, reject) => {
         setTimeout(() =>{
             resolve ("i am two")
         }, 3000)
     })
}

const docs = () => {
    return "i am three"
}

const fors = () => {
    return " i am four"
}

const callme = async () => {
    let valone = uno();
    console.log(valone);
  
    let valtwo =   docs();
    console.log(valtwo);

    let valthree = await tress();
    console.log(valthree);

    let valfor =  fors();
    console.log(valfor)

}
callme();

     
