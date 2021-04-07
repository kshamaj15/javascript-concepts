const packaging = [
    { id: 1, title: "kegs", size: 30000 },
    { id: 2, title: "bottle", size: 330 },
    { id: 3, title: "can", size: 300 },
    { id: 4, title: "container", size: 1000000 },
];

inputObject = {
    id: 1,
    title: "Beer for Famous Pub",
    packaging: 3, // id of the packaging
    orderFrequency: 3, // order placed after every 3 weeks
    quantityPerOrder: 3000, // quantity per order in Litres
    createdAt: 1589265720000,
}

function getPackaging(packageID){
    return packaging[packageID-1].title;
}

function getUnitsPerOrder(obj){
    return obj.quantityPerOrder / packaging[obj.packaging-1].size * 1000;
}

function getTotalVolumeInYear(obj){
    return (52/(obj.orderFrequency)*obj.quantityPerOrder/100).toFixed(2);;
}

function calculateLiquor(inputObject){
    let outputObject = {
        packaging: getPackaging(inputObject.packaging),
        unitsPerOrder: getUnitsPerOrder(inputObject),
        totalVolumeInYear: getTotalVolumeInYear(inputObject)
    };
    return outputObject;
}

console.log(calculateLiquor(inputObject));
