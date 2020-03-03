// Part 1 - Promise Chaining

// slowMath.add(6, 2)
// .then((result) => {
//     console.log(`Result: ${result}`);
//     return slowMath.multiply(result, 2);
// }).then((result) => {
//     console.log(`Result: ${result}`);
//     return slowMath.divide(result, 4);
// }).then((result) => {
//     console.log(`Result: ${result}`);
//     return slowMath.subtract(result, 3);
// }).then((result) => {
//     console.log(`Result: ${result}`);
//     return slowMath.add(result, 98);
// }).then((result) => {
//     console.log(`Result: ${result}`);
//     return slowMath.remainder(result, 2);
// }).then((result) => {
//     console.log(`Result: ${result}`);
//     return slowMath.multiply(result, 50);
// }).then((result) => {
//     console.log(`Result: ${result}`);
//     return slowMath.remainder(result, 40);
// }).then((result) => {
//     console.log(`Result: ${result}`);
//     return slowMath.add(result, 32);
// }).then((result) => {
//     console.log(`The final result is: ${result}`);
// }).catch((err) => {
//     console.log(err);
// });

// Part 2 - Async/Await

async function doMath(a, b) {
    try {
        let result = await slowMath.add(a, b);
        console.log(`Result: ${result}`);
        result = await slowMath.multiply(result, 2);
        console.log(`Result: ${result}`);
        result = await slowMath.divide(result, 4);
        console.log(`Result: ${result}`);
        result = await slowMath.subtract(result, 3);
        console.log(`Result: ${result}`);
        result = await slowMath.add(result, 98);
        console.log(`Result: ${result}`);
        result = await slowMath.remainder(result, 2);
        console.log(`Result: ${result}`);
        result = await slowMath.multiply(result, 50);
        console.log(`Result: ${result}`);
        result = await slowMath.remainder(result, 40);
        console.log(`Result: ${result}`);
        result = await slowMath.add(result, 32);
        console.log(`The final result is: ${result}`);
    } catch (err) {
        console.log(err);
    }
}

doMath(6, 2);