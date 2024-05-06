let num = +prompt("Istalgan birinchi son kiriting: ");

function number() {
    num++
    return num
}
let result = number(num);

document.write(result +" ");

let num2 = +prompt("Istalgan ikkinchi son kiriting: ");

function number2() {
    num2--
    return num2
}
let result2 = number2(num2);

document.write(result2);