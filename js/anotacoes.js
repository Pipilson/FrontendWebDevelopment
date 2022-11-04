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

switch (key) {
    case value:
        
        break;

    default:
        break;
}
//switch case > um monte de else if

function funcao(){
    console.log('oi'); //declara a função
}

(function funcao(){
    console.log('oi'); //declara a função e já chama ela
})(); //colocar em mais um () e outro () pra chamar a função

function funcao(parametro1, parametro2){
    console.log(parametro1);
    console.log(parametro2);
}

funcao(20, 'oi'); //printa 20 e 'oi'

const arrowFunction = () => {
    console.log('arrow'); //já atribui a função pra uma variavel
}

const returnFunciton = () => {
    //return 20; //pra retornar algo
    const a = 20;
    return a;
}
//-------------------------------
function myFunction(){
    return 20;
}

const myObj = {
    prop1: 50,
    prop2: myFunction
}

myObj.prop2 //myFunction()
myObj.prop2() //20

const string = 'papilson';
string.replace('a', 'i');
//-------------------------------

function myFunction(num){
    return num * 2;
} //normal

/* function (num) {
    return num * 2;
} //anonima */

(num) => {
    return num * 2;
} //arrow

num => num * 2; //simplificado

let regex = new RegExp("gato");
regex = /gato/;
regex = /[A-Z]/; //ABCDEFGHIJKLMNOPQRSTUVWXYZ
regex = /[0-9]/; //01234567890
regex = /[A-Za-z0-9]/; //ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
regex = /[A-Za-z0-9 ]/; //ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' '
regex = /./; //Qualquer caractere
regex = /\d/; //Qualquer número
regex = /\s/; //Qualquer espaço
regex = /\w/; //Qualquer letra e número (alfanumérico)
regex = /^/; /*Começo da string*/ regex = /^f/; //Começa com a letra 'f'?
regex = /$/; /*Final da string*/ regex = /f$/; //Termina com a letra 'f'?
regex = /gato|gatito/; //gato ou gatito

const str = 'my favorite food is steak';
/[a-z]/.exec(str);  //Array["m"]
/[a-z]*/.exec(str); //Array["my"] -- procura [a-z] 0 ou mais vezes
/[a-z]+/.exec(str); //Array["my"] -- procura [a-z] 1 ou mais vezes
/[a-z]?/.exec(str); //Array["m"]  -- procura 0 ou 1

/[a-z ]+/.exec(str);   //Array["my favorite food is steak"]
/[a-z ]{5}/.exec(str); //Array["my fa"]
/[a-z ]{2,6}/.exec(str); //Array["my fav"]

//--FLAGS--//
regex = /./g; //Global search
regex = /./i; //Case sensitive search
regex = /./m; //Multi-line Search
regex = /./s;
regex = /./u;
regex = /./y;
//-----------

const bdString = string.replaceAll('Dog', 'cat'); //Troca Dog --> cat; NÃO troca dog --> cat
const okString = string.replaceAll(/Dd{1}og/g, 'cat') //Troca (D|d)og todas as vezes que aparecer (g) --> cat

string = 'some string';
string[0].toUpperCase(); //S
string[0].toUpperCase() + string.substring(1); //Some string
string[0].toUpperCase() + string.substring(1, string.length); //Some string

let arr = [1, 2, 3, 5, 6];
arr.pop(); // arr = [1, 2, 3, 5]
arr.pop(); // arr = [1, 2, 3]
arr.push(4,5,6); // arr = [1, 2, 3, 4, 5, 6]
arr.unshift(0); // arr = [0, 1, 2, 3, 4, 5, 6]
let copyArr = arr.slice(); // copyArr = [0, 1, 2, 3, 4, 5, 6]
copyArr = arr.slice(3); // copyArr = [3, 4, 5, 6]
//slice faz uma cópia do array, splice modifica o array
arr = [1, 2, 3, 'oops', 4, 5, 6];
arr.splice(3, 1); // arr = [1, 2, 3, 4, 5, 6]
arr = [1, 2, 3, 'oops', 4, 5, 6];
arr.splice(3, 1, 3.5); // arr = [1, 2, 3, 3.5, 4, 5, 6]
arr.indexOf(3.5); //3
arr[arr.indexOf(3.5)] //3.5

arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);  
} //1, 2, 3

arr.forEach(arrItem => {
    console.log(arrItem);
}) //1, 2, 3

let myColors = ['blue', 'red', 'purple', 'orange', 'green'];
//tem orange?
let orangeExists = false
myColors.forEach(color =>{
    if(color === 'orange'){
        orangeExists = true;
    }
}) //true

myColors.includes('orange'); //true

myColors.indexOf('orange') !== -1; //true


let randomNumber = Math.random(); //valor entre 0 e 1
randomNumber * 5; //valor entre 0 e 5

arr = ['some', 'values', 'in', 'array'];
const randomIndex = Math.floor(Math.random() * arr.length);


//Error handling
try{
    let num = 20;
    num.toUpperCase();
} catch (error){
    console.log(error instanceof TypeError); //true
    console.log(error.message); //num.toUpperCase is not a function
}

//NaN - Not a Number
Number('30'); //30
Number('oi'); //NaN

//undefined - variavel que não recebeu valor
//null