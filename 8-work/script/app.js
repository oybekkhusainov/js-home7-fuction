let son = prompt("Istalgan birinchi son kiriting: ");
function number(num) {
    
     let num2 = [];
     for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            num2.push(i);
        }
     }
     return num2
}
let num2 = number(son);
document.write(num2)