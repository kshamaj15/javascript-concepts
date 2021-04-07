let n = 3;

function numberOfways(n) {
    if(n <= 0)
    return 0;

    if(n == 1 || n == 2)
    return n;

    return numberOfways(n-1) + numberOfways(n-2);
}

console.log(numberOfways(4))

let str = 'this is a text odd';

let out = 'si txet this a';

function output(inputStr) {
    let reveredArr = [];
    let arr = [];
    let words = inputStr.split(' ');
    for(let i=words.length-1; i>=0; i-=2) {
        reveredArr.push(reverseStr(words[i]));
    }
    for(let i=words.length-2; i>=0; i-=2) {
        arr.push(words[i]);
    }
    let str = arr.join(' ') + ' ' + reveredArr.join(' ');
    return (str).split(' ').reverse().join(' ');
}

function reverseStr(str) {
    return str.split('').reverse().join('');
}

console.log(output(str))


var person = {
    name: 'Kshama',
    age: 8,
    address: {
        add1: '11',
        add2: '22'
    }
}

function deepCpy(obj) {

    let copy = {};
    Object.keys(obj).forEach(key => {
        if(typeof obj[key] === 'object') {
            copy[key] = deepCpy(obj[key]);
        } else {
            copy[key] = obj[key];
        }
    })
    return copy;
}

console.log(deepCpy(person))


