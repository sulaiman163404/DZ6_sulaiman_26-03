function subtract() {
    operation = '-';
    }

function add() {
    operation = '+';
    }

function divide() {
    operation = '/';
    }

function multiply(){
    operation = '*'
    }

function calculate() {
    const num1 = parseInt(document.querySelector('#num1').value);
    const num2 = parseInt(document.querySelector('#num2').value);
    let result;

    switch (operation) {
        case '-':
            result = num1 - num2;
            break;
        case '+':
            result = num1 + num2;
           break;
        case '/':
            result = num1 / num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        default:
        }

        document.querySelector('#result').innerHTML = "Результат: " + result;
    }



