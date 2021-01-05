// قم بحل السؤال الأول هنا


// 1
let pets = [`cat`,`dog`,`snake`,`squirrel`,`wolf`];

console.log(pets);
pets.pop();
console.log(pets);
pets.push(`hamster`);
console.log(pets);



 let kicked =   pets.splice(2,2,`fish`);

console.log(pets);



//   2

let PET = {

    name:`cat`,
    age:5,
    preed:`scoth`,
    

};

PET.emoji = `🐱`;



console.log(PET);
console.log(`age is = ${PET.age}`);
