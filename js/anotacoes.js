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