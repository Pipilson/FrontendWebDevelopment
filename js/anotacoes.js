const minhaPrimeiraVariavel = 10; //Camel case é preferível
const minhaString = 'string' //"" também funciona, porém '' é preferível

const minhaArray = [10, 'string', {prop: 'objeto'}, [1, 2, 3]]; //Array com: [número, string, objeto, array]
console.log(minhaArray[0]) //Pega item de index 0 da array --> 10
console.log(minhaArray[3][0]) //Pega item de index 0 do item de index 3 --> 1

const variavelObjeto = {prop1: 20, prop2: 50}; //variavel = propriedades | variavel = {variavel: valor}
variavelObjeto.prop1 //Funciona como o minhaArray[0]
nestedObjeto['prop1']; //Funciona como o minhaArray[0], mas precisa de ''

const nestedObjeto = {
    layer1: {
        layer2: {
            layer3: {
                valor: 20
            }
        }
    }
}
nestedObjeto.layer1.layer2.layer3.valor; //Retorna 20

const minhaFuncao = function(){
    return 20;
}
minhaFuncao(); //Retorna 20

//Usar CONST para variaveis que não vão mudar
//Usar LET para variaveis que vão mudar
//Evitar usar VAR

const a = 4;
const b = 6;

//Operadores
a + b; //Soma
a - b; //Subtração
a * b; //Multiplicação
a / b; //Divisão
a % b; //Módulo
a ** b; //Exponenciação
a++; //a = a + 1
a--; //a = a - 1

a = b; //a = 6
a += b; //a = a + b
a -= b; //a = a - b
a *= b; //a = a * b
a /= b; //a = a / b

a == b; //igual em valor
a === b; //igual em valor e tipo
a != b; //diferente
a !== b; //diferente em valor e tipo
a > b; //a maior que b
a < b; //a menor que b
a >= b; //a maior ou igual que b
a <= b; //a menor ou igual que b

//Bizarrice do JavaScript
const Array1 = [1, 2, 3, 4, 5];
const Array2 = [1, 2, 3, 4, 5];

Array1 === Array1 //true
Array1 == Array2 //false
Array1 === Array2 //false -- O mesmo acontece com Objetos
//Pesquisar como comparar Arrays (Lodash)

let resultado1 = 20 === 20 ? 'values match' : "values do not match"; //ternário
//Significa:
let resultado2;
if (20 === 20) {
    resultado2 = 'values match';
} else {
    resultado2 = 'values do not match';
}

/*
&& //AND
|| //OR
!  //NOT
//JavaScript não tem o XOR? ^ só funciona com números?
*/