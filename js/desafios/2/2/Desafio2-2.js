//Os códigos dão resultados iguais? Qual é mais recomendável?

//Código 1
const firstNumber1 = 20;
const secondNumber1 = '20';

const result1 = firstNumber1 === secondNumber1;

console.log(result1);
//-----------------------------

//Código 2
const firstNumber2 = 20;
const secondNumber2 = '20';

//const result2 = firstNumber2 === secondNumber2;
const result2 = firstNumber2 == secondNumber2; //Encontrei o código correto

console.log(result1);
//------------------------------

/*
Os códigos são identidos, provavelmente erro do curso?
Imagino que um era pra usar o operador '==' e o outro '==='.
Partindo desse principio, os códigos NÃO vão dar resultados iguais.
'===' verifica se o tipo de variável é o mesmo, então nesse caso o resultado será false.
É mais recomendável usar '===' ao invés de '==' para quem ler seu código ter mais certeza do que você quer com a sua comparação.
*/