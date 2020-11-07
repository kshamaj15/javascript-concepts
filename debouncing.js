function getData(e) {
    // if(!timer)
    // timer = debounceGetData(e);
    let tt = setTimeout(function() {
        console.log(e.target.value)
        clearTimeout(tt)
    }, 1000)
    console.log(tt)
}

function debounceGetData(e) {
    console.log(e.target.value)
    return 300;
}

