let a = 'abbccaabbbccc';
let b = 'ac';

function count(a, b) {
    let countObj = {};
    for(let i=0; i<a.length; i++){
        if(countObj.hasOwnProperty(a[i]))
        countObj[a[i]]++;
        else
        countObj[a[i]] = 1;
    }
    console.log(countObj)
}

let msg = [
    {name: 'Ksha', text: 'Hii'},
    {name: 'Mahi', text: 'Hii'},
    {name: 'Ksha', text: 'Hii'},
    {name: 'Ksha', text: 'Hii'},
    {name: 'Ksha', text: 'Hii'},
    {name: 'Ksha', text: 'Hii'}
]

let betterFort = [
    {name: 'Ksha', text: ['Hii']},
    {name: 'Mahi', text: ['Hii']},
    {name: 'Ksha', text: ['Hii', 'my name']}
]

function convert(msg){
    let betterFormat = [];
    let prevUser = '';
    let newObj
    msg.forEach(m => {name
        if(m.name === prevUser) {

        } else {

        }
    })
}

function findMinDistance(a, x, y) {
    // let minValue = Infinity;
    // let xi = Infinity;
    // let yi = -Infinity;

    // for(let i=0; i<a.length; i++){
    //     if(a[i] === x) {
    //         minValue = min(minValue, abs(yi, i));
    //         xi = i;
    //     } else if(a[i] === y) {
    //         minValue = min(minValue, abs(xi, i));
    //         yi = i;
    //     }
    // }
    // console.log(minValue);
    let xi = [1, 3, 5, 7];
    let yi = [0, 6];
    let minV = Infinity;
    xi.forEach(x => {
        yi.forEach(y => {
            minV = min(minV, abs(x, y));
        })
    })
    console.log(minV)
}

function min(a, b) {
    return a<b ? a:b;
}

function abs(a, b) {
    return a-b >= 0 ? a-b : b-a;
}

findMinDistance(a, 'a', 'c');
