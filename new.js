let arr = [1,2,3,4,5];

// let filteredArr = arr.filter(ele => ele > 3);

console.log(arr)

// arr.

// function sum(a) {
//     return function(b){
//         console.log(a+b)
//     }
// }

// for(let i=1; i<=100; i++){
//     printNum(i);
// }

// function printNum(n) {
//     if(n%15 === 0)
//     console.log('FizzBuzz')
//     else if(n%3 === 0)
//     console.log('Fizz');
//     else if(n%5 === 0)
//     console.log('Buzz')
//     else
//     console.log(n)
// }

let memo = [];

function factorial(n) {
    if(n === 0 || n === 1) {
        if(memo.length < n)
        memo.push(1);
        return 1;
    }

    else if(memo.length === n-1)
    memo[n] = n*memo[n-1];
    else
    memo[n] = n*factorial(n-1);
    
    return memo[n];
}

console.log(memo)
console.log(factorial(5));
console.log(factorial(3));
