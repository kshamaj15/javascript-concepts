console.log('start');

function abc() {
    setTimeout(() => {
        console.log('from timer')
    }, 2000);

    let p = new Promise(setTimeout(() => {
        console.log('from Promise')
    }, 2000));

    p.then(res => {
        console.log(res)
    })
}

abc();

console.log('end');
