/* CodeWars- <6kyu> Persistent Bugger */ 
function persistence(num) {
    let meuNum = num; //nova variável com o número inserido
    let contador = 0; //número de vezes que o persistence foi feito  
    let mult = 0; //variável que vai receber resultado das multiplicações
    let arr = []; //variável que vai receber número inserido como array

    while (meuNum.toString().split('').length !== 1) { //enquanto meuNum tiver mais de um digito
        
        arr = meuNum.toString().split(''); //transforma meuNum em string e depois em array | number --> string --> array
        mult = Number(arr[0]); //variável pega index[0] da array, transformado em número || variável pega o primeiro digito de meuNum

        for (let i = 1; i < arr.length; i++) { //começa do segundo digito, o primeiro já está na variável 'mult'
            mult *= Number(arr[i]); //primeiro digito de meuNum * os outros, um por vez a partir do segundo
        }

        contador++; //+1 sempre que fazer todas as multiplicações
        meuNum = mult; //entrega o resultado final para a variável 'meuNum' | number
    }

    return contador; //retorna quantas vezes a opereção foi feita
}