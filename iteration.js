'use strict'

for (let i=0;i <=11;i++){
    console.log(i);
}

let puppies = 300;
let notEnoughPups = true;

while (notEnoughPups){
    console.log("another pup");
    puppies++;

    if (puppies < 235){
        notEnoughPups=false; 
    }
}
console.log("oh so many puppies!");

let x = 0;
let canIRun = false; 
do {
    x++;
    console.log(x);

} while (canIRun);