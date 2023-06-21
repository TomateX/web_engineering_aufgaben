var currentResult = document.getElementById("result");
var opAtEnd = false;

function appendNumber(number) {
    currentResult.value += number;
    opAtEnd = false;
}

function appendOperator(operator) {
    if(opAtEnd){
        return;
    }
    currentResult.value += operator;
    opAtEnd = true;
}

function calculate() {
    currentResult.value = eval(currentResult.value);
}

function clearResult() {
    result.value = "";
}
