function getMatrix(str) {
    if (str instanceof Array) return new Matrix(str);
    if (str && typeof str === 'string') {
        const arr = str.split('/n');
        const values = [];
        for (let i = 0; i < arr.length; i++) {
            values.push(arr[i].split(', ').map(el => el - 0));
        }
        if (values[0] instanceof Array){
            return new Matrix(values);
        }
    }
    return null;
}

function getVector(str) {
    if (str instanceof Array) return new Vector(str);
    if (str && typeof str === 'string') {
        const arr = str.replace('(', '').replace(')', '').split(' ').map(el => el - 0);
        return new Vector(arr);
    }
    return null;
}

function getComplex(str) {
    if (typeof str === 'number') return new Complex(str);
    if (str && typeof str === 'string') {
        const arrStr = str.split('i*');
        if (arrStr.length === 2) {
            if (arrStr[0].includes('+')) {
                arrStr[0] = arrStr[0].replace('+', '');
                return new Complex(arrStr[0] - 0, arrStr[1] - 0);
            }
            if (arrStr[0].includes('-')) {
                arrStr[0] = arrStr[0].replace('-', '');
                return new Complex(arrStr[0] - 0, -arrStr[1] - 0);
            }
        }
        if (arrStr.length === 1) {
            if (isNan(arrStr[0] - 0)) return null;
            return new Complex(arrStr[0] - 0);
        }
    }
    return null;
}

function getValue(str) {
    if (str.includes('/n')) return getMatrix(str);
    if (str.includes('(')) return getVector(str);
    if (str.includes('i')) return getComplex(str);
    return str - 0;
}

function getCalculator(value) {
    if (value instanceof Matrix) return new MatrixCalculator;
    if (value instanceof Vector) return new VectorCalculator;
    if (value instanceof Complex) return new ComplexCalculator;
    return new RealCalculator;
}

window.onload = function () {
    const operandHandler = (event) => {
        const a = getValue(document.getElementById('a').value);
        const b = getValue(document.getElementById('b').value);
        const operand = event.target.dataset.operand;
        const calc = getCalculator(a);
        const result = calc[operand](a, b);
        document.getElementById('c').value = result.toString();
    }

    const buttons = document.querySelectorAll('.operand');
    buttons.forEach(button => {
        button.addEventListener('click', operandHandler);
    })
};