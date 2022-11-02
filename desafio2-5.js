//Qual o resultado de 'result'?

const myObj = {
    nestedObj1: {
        price: 100,
        quantity: 5
    },
    nestedObj2: {
        price: 150,
        quantity: 2
    }
};

const myArray = [myObj.nestedObj1, myObj.nestedObj2];
//myArray = [[price: 100, quantity: 5], [price: 150, quantity: 2]];

const result = (myArray[0].price * myArray[0].quantity > myArray[1].price * myArray[1].quantity);
//result = (100 * 5 > 150 * 2);
//result = (500 > 300);
//result = true;