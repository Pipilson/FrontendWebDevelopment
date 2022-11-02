//Qual o resultado de 'result'?

const myObj = {
    prop1: 'first value',
    prop2: 20
}

const myArray = [40, 50, 2];

const result = myObj.prop2 === (myArray[0] / myArray[2]);
/*
const result = 20 === (40 / 2);
const result = 20 === 20;

Ambos são 'number' --> true
*/