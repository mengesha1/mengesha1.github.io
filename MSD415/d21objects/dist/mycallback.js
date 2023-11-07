/**
 * write function
 * my call back
 */
function cube(num) {
    return num * num * num;
}
function mycallback(fun, number) {
    console.log(fun(arg));
}
function cubeSquare(num) {
    if (num % 2 == 0) {
        return num * num * num;
    }
    else {
        return num * num;
    }
}
console.group("expext 1000:", mycallback(cube, 10));
console.group("expext 125:", mycallback(cube, 5));
console.group("expext 25:", mycallback(cubeSquare, 5));