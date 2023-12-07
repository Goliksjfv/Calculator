window.onload = function () {
    const cCalc = new ComplexCalculator;
    const xRe = document.getElementById('inputComplexRe1');
    const xIm = document.getElementById('inputComplexIm1');
    const yRe = document.getElementById('inputComplexRe2');
    const yIm = document.getElementById('inputComplexIm2');
    document.getElementById('addComplex').addEventListener('click', function () {
        const a = new Complex(xRe.value - 0, xIm.value - 0);
        const b = new Complex(yRe.value - 0, yIm.value - 0);
        document.getElementById('resultComplex').innerHTML = 'Результат: ' + cCalc.add(a, b).re + ' + ' + cCalc.add(a, b).im + ' i ';
    });
    document.getElementById('subComplex').addEventListener('click', function () {
        const a = new Complex(xRe.value - 0, xIm.value - 0);
        const b = new Complex(yRe.value - 0, yIm.value - 0);
        document.getElementById('resultComplex').innerHTML = 'Результат: ' + cCalc.sub(a, b).re + ' + ' + cCalc.sub(a, b).im + ' i ';
    });
    document.getElementById('multComplex').addEventListener('click', function () {
        const a = new Complex(xRe.value - 0, xIm.value - 0);
        const b = new Complex(yRe.value - 0, yIm.value - 0);
        document.getElementById('resultComplex').innerHTML = 'Результат: ' + cCalc.mult(a, b).re + ' + ' + cCalc.mult(a, b).im + ' i ';
    });
    document.getElementById('divComplex').addEventListener('click', function () {
        const a = new Complex(xRe.value - 0, xIm.value - 0);
        const b = new Complex(yRe.value - 0, yIm.value - 0);
        document.getElementById('resultComplex').innerHTML = 'Результат: ' + cCalc.div(a, b).re + ' + ' + cCalc.div(a, b).im + ' i ';
    });
    document.getElementById('prodComplex').addEventListener('click', function () {
        const a = new Complex(xRe.value - 0, xIm.value - 0);
        const b = yRe.value - 0;
        document.getElementById('resultComplex').innerHTML = 'Результат: ' + cCalc.prod(a, b).re + ' + ' + cCalc.prod(a, b).im + ' i ';
    });
    document.getElementById('powComplex').addEventListener('click', function () {
        const a = new Complex(xRe.value - 0, xIm.value - 0);
        const b = yRe.value - 0;
        document.getElementById('resultComplex').innerHTML = 'Результат: ' + cCalc.pow(a, b).re + ' + ' + cCalc.pow(a, b).im + ' i ';
    });
    document.getElementById('oneComplex').addEventListener('click', function () {
        const a = new Complex(xRe.value - 0, xIm.value - 0);
        const b = new Complex(yRe.value - 0, yIm.value - 0);
        document.getElementById('resultComplex').innerHTML = 'Результат: ' + cCalc.one(a, b).re + ' + ' + cCalc.one(a, b).im + ' i ';
    });
    document.getElementById('zeroComplex').addEventListener('click', function () {
        const a = new Complex(xRe.value - 0, xIm.value - 0);
        const b = new Complex(yRe.value - 0, yIm.value - 0);
        document.getElementById('resultComplex').innerHTML = 'Результат: ' + cCalc.zero(a, b).re + ' + ' + cCalc.zero(a, b).im + ' i ';
    });
    const rCalc = new RealCalculator;
    const x = document.getElementById('inputReal1');
    const y = document.getElementById('inputReal2');
    document.getElementById('addReal').addEventListener('click', function () {
        const a = x.value-0;
        const b = y.value - 0;
        document.getElementById('resultReal').innerHTML = 'Результат: ' + rCalc.add(a, b);
    });
    document.getElementById('subReal').addEventListener('click', function () {
        const a = x.value-0;
        const b = y.value - 0;
        document.getElementById('resultReal').innerHTML = 'Результат: ' + rCalc.sub(a, b);
    });
    document.getElementById('multReal').addEventListener('click', function () {
        const a = x.value-0;
        const b = y.value - 0;
        document.getElementById('resultReal').innerHTML = 'Результат: ' + rCalc.mult(a, b);
    });
    document.getElementById('divReal').addEventListener('click', function () {
        const a = x.value-0;
        const b = y.value - 0;
        document.getElementById('resultReal').innerHTML = 'Результат: ' + rCalc.div(a, b);
    });
    document.getElementById('prodReal').addEventListener('click', function () {
        const a = x.value-0;
        const b = y.value - 0;
        document.getElementById('resultReal').innerHTML = 'Результат: ' + rCalc.prod(a, b);
    });
    document.getElementById('powReal').addEventListener('click', function () {
        const a = x.value-0;
        const b = y.value - 0;
        document.getElementById('resultReal').innerHTML = 'Результат: ' + rCalc.pow(a, b);
    });
    document.getElementById('oneReal').addEventListener('click', function () {
        const a = x.value-0;
        const b = y.value - 0;
        document.getElementById('resultReal').innerHTML = 'Результат: ' + rCalc.one(a, b);
    });
    document.getElementById('zeroReal').addEventListener('click', function () {
        const a = x.value-0;
        const b = y.value - 0;
        document.getElementById('resultReal').innerHTML = 'Результат: ' + rCalc.zero(a, b);
    });
}