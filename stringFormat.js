let inputStr = "any fool can write code that a computer can understand Good programmers write code that humans can understand"

// convert word in proper case.
// input: kshama :: output: Kshama
function formateInProperCase(word) {
    let proper = word.length > 1 ? word[0].toUpperCase() + word.slice(1) : word[0].toUpperCase();
    // console.log(proper)
    return proper;
}

function formatString(inp) {
    let words = inp.split(' ');//
    let out = '';
    for(let i=0; i<words.length; i++) {
        if(words[i].length > 0) {//only if the word has charactor
            if(out.length === 0) {//first word
                out += formateInProperCase(words[i]);
            } else if(out[out.length-1] === '.') {//first word of a new sentence
                out += ' ' + formateInProperCase(words[i]);
            } else if(words[i][0] === '.') {//add space after a new sentence
                out += words[i].length > 1 ? '. ' + formateInProperCase(words[i].slice(1)) : '.';
            } else if(words[i][0] === words[i][0].toUpperCase()) {//add . before a new sentence
                out += '. ' + words[i];
            } else {//default case
                out += ' ' + words[i];
            } 
        }
    }
    return out[out.length-1] === '.' ? out : out + '.'; // add . at the end
}

console.log(formatString(inputStr))
