document.addEventListener('DOMContentLoaded', function () {
    // add event
    document.getElementById('add').addEventListener('click', () => {
        const number1 = parseFloat(document.getElementById('number1').value) || 0;
        const number2 = parseFloat(document.getElementById('number2').value) || 0;
        const result = document.getElementById('calculation-result');
        result.textContent = add(number1, number2);
    })

    // subtract event
    document.getElementById('subtract').addEventListener('click', () => {
        const number1 = parseFloat(document.getElementById('number1').value) || 0;
        const number2 = parseFloat(document.getElementById('number2').value) || 0;
        const result = document.getElementById('calculation-result');
        result.textContent = subtract(number1, number2);
    })

    // division event
    document.getElementById('divide').addEventListener('click', () => {
        const number1 = parseFloat(document.getElementById('number1').value) || 0;
        const number2 = parseFloat(document.getElementById('number2').value) || 0;
        const result = document.getElementById('calculation-result');
        result.textContent = divide(number1, number2);
    })

    // multiplication event
    document.getElementById('multiply').addEventListener('click', () => {
        const number1 = parseFloat(document.getElementById('number1').value) || 0;
        const number2 = parseFloat(document.getElementById('number2').value) || 0;
        const result = document.getElementById('calculation-result');
        result.textContent = multiply(number1, number2);
    })

    function add(number1, number2) {
        return number1 + number2;
    }
    function subtract(number1, number2) {
        return number1 - number2;
    }
    function divide(number1, number2) {
        return number1 / number2;
    }
    function multiply(number1, number2) {
        return number1 * number2;
    }
})
