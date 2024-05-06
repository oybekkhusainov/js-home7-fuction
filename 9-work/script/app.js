while (!["+", "-", "*", "/","0"].includes()) {
    option = prompt(
        "+ - addition\n - - subtraction\n * - multiplication\n / - division\n 0 - exit" 
    );
    let num1;
    while (!num1 || typeof num1 !== "number") {
        num1 = +prompt("Num1: ");
    }
    while (!num2 || typeof num2 !== "number2") {
        num2 = +prompt("Num2: ");
    }
    function surroUnding () {
        switch (option) {
            case "+": {
                console.log (`n1 + n2 = ${num1 + num2}`);
                break;
            }
            case "-": {
                console.log (`n1 - n2 = ${num1 - num2}`);
                break;
            }
            case "*": {
                console.log (`n1 * n2 = ${num1 * num2}`);
                break;
            }
            case "/": {
                console.log (`n1 / n2 = ${num1 / num2}`);
                break;
            }
            case "0": {
                console.log ("Exit");
                break;
            }
            default: {
                console.log ("Error");
                break;
            }
        }
    }
}
    surroUnding();