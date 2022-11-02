/*
Qual o valor de 'expression5'?
É possível escrever o código em só uma linha?
*/

const expression1 = 100 % 50; //0
const expression2 = 100 / 50; //2
const expression3 = expression1 < expression2; //0 < 2 --> true
const expression4 = expression3 && 300 + 5 === 305; 
//true && 300 + 5 === 305
//true && 305 === 305
//true && true --> true
const expression5 = !expression4; //!true --> false

console.log(expression5); //false

//Código em uma única linha:
const resultado = !((100 % 50 < 100 / 50) && (300 + 5 === 305)); //false