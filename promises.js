// The Promise object represents the eventual completion (success or failure) of
//  an asynchronous operation and its resulting value.

// let waitfor = time => new Promise();

var a = 1;

{
    (function(){
        var a = 2;
        console.log(a);
    })();
}

console.log(a);
