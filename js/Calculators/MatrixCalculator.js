class MatrixCalculator extends RealCalculator {
    div() {
        return null;
    }

    add(a, b) {
        return new Matrix(a.values.map(
            (arr, i) => arr.map((elem, j) => super.add(elem, b.values[i][j]))
        ));
    }

    sub(a, b) {
        return new Matrix(a.values.map(
            (arr, i) => arr.map((elem, j) => super.sub(elem, b.values[i][j]))
        ));
    }
    mult(a, b) {
        const length = a.values.length;
        const c = this.zero(length);
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
                let S = super.zero(length);
                for (let k = 0; k < length; k++) {
                    S = super.add(
                        S,
                        super.mult(
                            a.values[i][k],
                            b.values[k][j]
                        )
                    );
                }
                c.values[i][j]=S;
            }
        }
        return c;
    }
    prod(a, p) {
        return new Matrix(a.values.map(
            arr => arr.map(elem => super.prod(elem, p))
        ));
    }
    pow(a, n) {

    }
    one(length) {
        const values = [];
        for (let i = 0; i < length; i++) {
            values.push([]);
            for (let j = 0; j < length; j++) {
                values[i][j] = i === j ? super.one() : super.zero();
            }
        }
        return new Matrix(values);
    }
    zero(length) {
        const values = [];
        for (let i = 0; i < length; i++) {
            values.push([]);
            for (let j = 0; j < length; j++) {
                values[i][j] = super.zero();
            }

        }
        return new Matrix(values);
    }
}