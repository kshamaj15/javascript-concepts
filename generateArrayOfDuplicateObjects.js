
// function generateArrayOfDuplicateObjects(objectArr) {

//     // created map object for same object, which will contain array of id and time object
//     let map = {};
//     objectArr.forEach(ele => {
//         let id = ele.id;
//         let time = ele.time;
//         delete ele.id;
//         delete ele.time;
//         if(!map.hasOwnProperty(JSON.stringify(ele)))
//         map[JSON.stringify(ele)] = [];
//         map[JSON.stringify(ele)].push({id: id, time: time});
//     })
     
//     // using map object, generated output Array
//     let outArr = [];
//     Object.keys(map).forEach(key => {
//         let arr = [];
//         map[key].forEach(ele => {
//             let obj = {...ele, ...JSON.parse(key)};
//             arr.push(obj);
//         })
//         outArr.push(arr);
//     });
//     return outArr;
// }

// let ipObj = [
//     {
//     id: 3,
//     sourceAccount: 'A',
//     targetAccount: 'B',
//     amount: 100,
//     category: 'eating_out',
//     time: '2018-03-02T10:34:30.000Z'
//     },
//     {
//     id: 1,
//     sourceAccount: 'A',
//     targetAccount: 'B',
//     amount: 100,
//     category: 'eating_out',
//     time: '2018-03-02T10:33:00.000Z'
//     },
//     {
//     id: 6,
//     sourceAccount: 'A',
//     targetAccount: 'C',
//     amount: 250,
//     category: 'other',
//     time: '2018-03-02T10:33:05.000Z'
//     },
//     {
//     id: 4,
//     sourceAccount: 'A',
//     targetAccount: 'B',
//     amount: 100,
//     category: 'eating_out',
//     time: '2018-03-02T10:36:00.000Z'
//     },
//     {
//     id: 2,
//     sourceAccount: 'A',
//     targetAccount: 'B',
//     amount: 100,
    
//     category: 'eating_out',
//     time: '2018-03-02T10:33:50.000Z'
//     },
//     {
//     id: 5,
//     sourceAccount: 'A',
//     targetAccount: 'C',
//     amount: 250,
//     category: 'other',
//     time: '2018-03-02T10:33:00.000Z'
//     }
// ]

// console.log(generateArrayOfDuplicateObjects(ipObj));


let input = [
    {
    id: 3,
    sourceAccount: 'A',
    targetAccount: 'B',
    amount: 100,
    category: 'eating_out',
    time: '2018-03-02T10:34:30.000Z'
    },
    {
    id: 1,
    sourceAccount: 'A',
    targetAccount: 'B',
    amount: 100,
    category: 'eating_out',
    time: '2018-03-02T10:33:00.000Z'
    },
    {
    id: 6,
    sourceAccount: 'A',
    targetAccount: 'C',
    amount: 250,
    category: 'other',
    time: '2018-03-02T10:33:05.000Z'
    },
    {
    id: 4,
    sourceAccount: 'A',
    targetAccount: 'B',
    amount: 100,
    category: 'eating_out',
    time: '2018-03-02T10:36:00.000Z'
    },
    {
    id: 2,
    sourceAccount: 'A',
    targetAccount: 'B',
    amount: 100,
    category: 'eating_out',
    time: '2018-03-02T10:33:50.000Z'
    },
    {
    id: 5,
    sourceAccount: 'A',
    targetAccount: 'C',
    amount: 250,
    category: 'other',
    time: '2018-03-02T10:33:00.000Z'
    }
    ]



function generateArrayOfDuplicateObjects(objectArr) {

    // created map object for same object, which will contain array of id and time object
    let map = {};
    objectArr.forEach(ele => {
        let id = ele.id;
        let time = ele.time;
        delete ele.id;
        delete ele.time;
        if(!map.hasOwnProperty(JSON.stringify(ele)))
        map[JSON.stringify(ele)] = [];
        map[JSON.stringify(ele)].push({id: id, time: time});
    })
     
    // using map object, generated output Array
    let outArr = [];
    Object.keys(map).forEach(key => {
        let arr = [];
        map[key].forEach(ele => {
            let obj = {...ele, ...JSON.parse(key)};
            arr.push(obj);
        })
        outArr.push(arr);
    });
    return outArr;
}

console.log(generateArrayOfDuplicateObjects(input))
