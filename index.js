// Code your solution in this file!


function distanceFromHqInBlocks(blocks) {
    
    const hqLocation = 42;
    return Math.abs(blocks - hqLocation)

};


function distanceFromHqInFeet(blocks) {
    const relativeBlocks = distanceFromHqInBlocks(blocks);

    return relativeBlocks * 264
}

let block1 = 43
let feet1 = distanceFromHqInFeet(block1);

//console.log(feet1);

let block2 = 50
let feet2 = distanceFromHqInFeet(block2)

//console.log(feet2);

let block3 = 34
let feet3 = distanceFromHqInFeet(block3);

//console.log(feet3);

function distanceTravelledInFeet(start, destination) {

        return Math.abs(start - destination) * 264
}

//console.log(distanceTravelledInFeet(43,48));
//console.log(distanceTravelledInFeet(50,60));
//console.log(distanceTravelledInFeet(34,28));

function calculatesFarePrice(start, destination) {
    const farePrice = distanceTravelledInFeet(start, destination);


    if (farePrice < 400) {
        return 0
    } else if (farePrice <= 2000) {
       return (farePrice - 400) * .02
    } else if (farePrice < 2500) {
        return 25
    } else if (farePrice > 2500) {
        return 'cannot travel that far'
    }
    
}

console.log(calculatesFarePrice(43,44))
console.log(calculatesFarePrice(34, 32))
console.log(calculatesFarePrice(50, 58))
console.log(calculatesFarePrice(34, 24));
