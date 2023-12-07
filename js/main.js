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
}