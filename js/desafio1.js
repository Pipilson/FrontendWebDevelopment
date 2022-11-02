const myBoolean = true; //Etapa 1

const myString = 'hello word'; //Etapa 2

const firstNumber = 20; //Etapa 3

let secondNumber = 40; //Etapa 4

secondNumber = 80; //Etapa 5

const myArray = [myBoolean, myString] //Etapa 6

const myObject = {
    firstProperty: myArray, 
    sumProperty: firstNumber + secondNumber
} //Etapa 7

console.log(myObject); //Etapa 8 --> {firstProperty: [true, 'hello word'], sumProperty: 100}

console.log(myObject.sumProperty); //Etapa 9 --> 100

console.log(myObject.firstProperty[1]); //Etapa 10 --> 'hello word'