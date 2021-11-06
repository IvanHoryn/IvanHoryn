let userName = "Ivan"; 
let age = 30;
let boo = true;

console.log(typeof userName, typeof age, typeof boo); 

function sayHello() {
    let messege = "Hello JavaScript " + userName;
    console.log(messege);
}


sayHello();

function simplmath(a, b) {
    let result = a + b;
    return result;
}

let sum = simplmath(1644, 35);

console.log(sum);

window.addEventListener("scroll", function() {
    console.log("scroled");
})