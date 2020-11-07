async function hello() { 
    return "Hello";
};

hello().then((res) => {
    console.log(res)
});

function clo() {
    return function() {
        console.log(arguments[0] + arguments[1]);
    }
}

clo()(1,2,3);
