window.onload = function () {
    const operandHandler = (event) => {
        const calc =  new Calculator;
        const a = calc.getValue(document.getElementById('a').value);
        const b = calc.getValue(document.getElementById('b').value);
        const operand = event.target.dataset.operand;
        const calculator = calc.getCalculator(a);
        const result = calculator[operand](a, b);
        if (result === null){
            document.getElementById('c').value = 'Недопустимая опреация!'
        }else {
            document.getElementById('c').value = result.toString();
        }
    }

    const buttons = document.querySelectorAll('.operand');
    buttons.forEach(button => {
        button.addEventListener('click', operandHandler);
    })
};