// Truthy:
// "0"
// " "
// {}
// []
// 'false'

// Falsy:
// 0
// ""
// undefined
// null
// NaN
// false

let  name = {};

if (name) {
    console.log("condition is true");
}
else {
    console.log("condition is false");
}